import axios from 'axios'

const getFirstNews = async (state) => {
  await axios.get(process.env.REACT_APP_URL_API)
    .then((res) => {
      state(res.data)
    });
}

const getPublicationBySlug = async (slug, state) => {
  let path = slug;
  if (slug.length < 1) {
    path = window.location.pathname.split('/')[2];
  }
  await axios.get(`${process.env.REACT_APP_DETAIL_PUBLICATION}/${path}`)
    .then((res) => {
      return state(res.data);
    });
}

export const Service = {
  getFirstNews,
  getPublicationBySlug
};
