import React from "react";
import ActiveButton from "../../_components/Buttons/ActiveButton";
import { Components } from "../../_components/Components";
import { Service } from "../../_service/Apiki";
import './Home.scss';
export const Home = React.memo(() => {
  const [data, setData] = React.useState([]);
  const [inFetch, setInFetch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const options = ['Todos', 'Mais Recentes', 'Mais Acessados'];
  React.useEffect(() => {
    (async () => {
      await Service.getFirstNews(setData, setInFetch);
    })();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <span className="min-w-full border mt-4 mb-4"></span>
        <div className="flex items-center filter">
          <select className="mr-4 border">
            {
              options.map((_value, key) => (
                <option key={key}>
                  {_value}
                </option>
              ))
            }
          </select>
          <ActiveButton text={'Filtrar'} />
        </div>
        {
          inFetch &&
          <div className="flex flex-wrap ml-4 mr-4 p-4">
            {Array.from(Array(10).keys()).map((_value) => (
              <Components.Skelleton key={_value}/>
            ))}
          </div>
        }
        {
          !inFetch &&
          <>
            <div className="flex flex-wrap ml-4 mr-4 p-4">
              <Components.PublicationCard data={data} />
            </div>
            <div className="mb-20">
              <span>
                {
                  [1, 2, 3, 4, 5, '...'].map((item, index) => (
                    <span className={
                      item === page
                        ? 'font-bold p-4 selected'
                        : 'font-bold p-4 page '
                    } key={index + 'a'}
                      onClick={() => { Service.getPublicationsByPage(item, setData, setPage, setInFetch) }}
                    >
                      {item}
                    </span>
                  ))
                }
              </span>
            </div>
          </>
        }
      </div>
    </>
  );
})
