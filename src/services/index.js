import Axios from "axios";

const { REACT_APP_API_KEY } = process.env;

export default async (userInput) => {
  const response = await Axios.get(
    `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&t=${userInput}`
  );

  return response.data;
};
