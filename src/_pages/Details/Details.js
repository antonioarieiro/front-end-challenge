import React from "react";
import { Service } from "../../_service/Apiki";
import ApikiContext from "../../_context/ApikiContext";
import { useNavigate } from "react-router-dom";
import Parser from 'html-react-parser';
import './Details.scss';

export const Details = React.memo(() => {
  const [details, setDetails] = React.useState([]);
  const { currentSlug } = React.useContext(ApikiContext);
  const Navigate = useNavigate();
  React.useEffect(() => {
    (async () => {
      await Service.getPublicationBySlug(currentSlug, setDetails);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="ml-8 mt-8">
        <button
        className="return-btn flex items-center justify-center"
        onClick={() => {Navigate('/'); }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11.263" viewBox="0 0 16 11.263" className="ml-2">
            <path id="Path_107" data-name="Path 107" d="M11.488,1.55h0a.554.554,0,0,0-.554.554V15.989L6.721,13.038a.554.554,0,0,0-.631.907l4.944,3.46a.781.781,0,0,0,.908,0l4.944-3.46a.554.554,0,1,0-.631-.908l-4.213,2.952V2.1A.554.554,0,0,0,11.488,1.55Z" transform="translate(17.55 -5.884) rotate(90)" fill="#000" />
          </svg>
          <span className="m-2 font-bold">
          Voltar
          </span>
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10">
        {
          details.length < 1 &&
          <div className="flex animate-pulse flex-col w-[100%] p-4 ">
            <div className="flex justify-center items-center h-36 bg-gray-300">
              <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
            </div>
            <div className="w-full mt-4">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        }
        {
          details.length > 0 &&
          <div className="content" >
            {
              details[0]._embedded.author[0].name &&
              <div className="md:flex items-center">
                <img className="w-20 rounded-full bg-cover h-20 flex items-center justify-center mx-auto" src={details[0]._embedded.author[0].yoast_head_json.og_image[0].url} alt="icon" />
                <div className="flex flex-col w-96 items-center mx-auto mt-2">
                  <p>Twitter: {details[0]._embedded.author[0].yoast_head_json.twitter_site}</p>
                  <p>{details[0].date}</p>
                </div>
                <h1 className="title-details mx-auto w-full flex justify-center mb-4 p-4">
                  {details[0].title.rendered}
                </h1>
              </div>
            }
            <div className="content mx-auto p-4 md:p-2">{Parser(details[0].content.rendered)}</div>
            <div className="mb-20">
              {
                details[0]._embedded.author[0].name &&
                <div className="border p-2">
                  <div className="md:flex mx-auto items-center justify-center">
                    <img className="w-20 rounded-full bg-cover h-20" src={details[0]._embedded.author[0].yoast_head_json.og_image[0].url} alt="icon" />
                    <div className="flex flex-col">
                      <p className="text-2xl font-bold">By: {details[0]._embedded.author[0].name}</p>
                      <p className="text-2xl cursor-pointer hover:text-blue-400 font-bold">
                        Mais Sobre o Autor:
                        <a href={details[0]._embedded.author[0].yoast_head_json.og_url} target="_blank" rel="noreferrer">
                          {details[0]._embedded.author[0].yoast_head_json.og_url}
                        </a>
                      </p>
                    </div>
                  </div>
                  <p className="w-full">{details[0]._embedded.author[0].description}</p>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </>
  );
})
