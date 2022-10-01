import React from "react";
import { Service } from "../../_service/Apiki";
import ApikiContext from "../../_context/ApikiContext";
import Parser from 'html-react-parser';
import './Details.scss';

export const Details = React.memo(() => {
  const [details, setDetails] = React.useState([]);
  const { currentSlug } = React.useContext(ApikiContext)
  React.useLayoutEffect(() => {
    (async () => {
      await Service.getPublicationBySlug(currentSlug, setDetails);
    })();
  }, []);
  console.log(details)
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-10">
        {
          details.length > 0 &&
          <div className="content" >
            <h1 className="title-details mx-auto w-full flex justify-center mb-4">
              {details[0].title.rendered}
            </h1>
            <div className="content mx-auto">{Parser(details[0].content.rendered)}</div>
            <div className="mb-20">
              <div className="flex items-center">
                <img />
              </div>
              <div className="flex items-center w-full items-center justify-center">
                <img className="w-20 rounded-full bg-cover h-20" src={details[0]._embedded.author[0].yoast_head_json.og_image[0].url} alt="icon" />
                <div className="flex flex-col">
                  <p className="text-2xl font-bold">By: {details[0]._embedded.author[0].name}</p>
                  <p className="text-2xl cursor-pointer hover:text-blue-400">
                    Mais Sobre o Autor: 
                    <a href={details[0]._embedded.author[0].yoast_head_json.og_url} target="_blank">
                    {details[0]._embedded.author[0].yoast_head_json.og_url}
                    </a>
                    </p>
                </div>
              </div>
              <p>{details[0]._embedded.author[0].description}</p>
            </div>
          </div>
        }
      </div>
    </>
  );
})
