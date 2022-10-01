import React from "react";
import ActiveButton from "../../_components/Buttons/ActiveButton";
import { Components } from "../../_components/Components";
import { Service } from "../../_service/Apiki";
import './Home.scss';
export const Home = React.memo(() => {
  const [data, setData] = React.useState([])
  const options = ['Todos', 'Mais Recentes', 'Mais Acessados'];
  React.useEffect(() => {
    (async () => {
      await Service.getFirstNews(setData);
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
        <div className="flex flex-wrap ml-4 mr-4 p-4">
          <Components.NoticeCard data={data} />
        </div>
      </div>
    </>
  );
})


