import axios from 'axios'

const getFirstNews = async (state) => {
  await axios.get(process.env.REACT_APP_URL_API)
  .then((res) => {
    state(res.data)
  });
}

export const Service = {
  getFirstNews
}