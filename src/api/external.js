import axios from "axios";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const NEWS_API_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

export const getNews = async () => {
  let response;

  try {
    response = await axios.get(NEWS_API_ENDPOINT);
    response = response.data.articles.slice(0, 15);
  } catch (error) {}

  return response;
};

// export const getCrypto = async () => {
//   let response;

//   try {
//     response = await axios.get(CRYPTO_API_ENDPOINT);

//     response = response.data;
//   } catch (error) {}

//   return response;
// };
