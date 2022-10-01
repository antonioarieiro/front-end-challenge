import React from "react";
import ActiveButton from "../Buttons/ActiveButton";
import { useNavigate } from "react-router-dom";
import './NoticeCard.scss';
function Card(props) {
  const { data } = props;
  const Navigate = useNavigate();

  const viewPublication = (slug) => {
    Navigate(`/details/${slug}`)
  }
  return (
    <>
      {
        data.length > 0 &&
        data.map((_value, key) => (
          <div key={key} className='flex flex-col w-[20%] p-4 card'>
            <img src={_value.yoast_head_json.og_image[0].url} alt="file" className="w-96 bg-cover" />
            <div className="flex items-center mt-2">
              <p className="font-bold">{_value._embedded.author[0].name}</p>
              <p className="ml-4 truncate">{_value.date}</p>
            </div>
            <p className="mt-2 title-card truncate">
              {_value.title.rendered}
            </p>
            <div className="mt-2" onClick={() => { viewPublication(_value.slug) }}>
              <ActiveButton text={'Ver Publicação'} />
            </div>
          </div>
        ))
      }
    </>
  )
}

const NoticeCard = React.memo(Card);
export default NoticeCard;
