import Axios from "axios";
const { REACT_APP_API_KEY } = process.env;

export const handleChangeForTitleHelper = (event, setUserInputMethod) => {
  setUserInputMethod(event.target.value);
};

export const handleFormSubmitHelper = (
  event,
  userInput,
  movieSearchMethod,
  setUserInputMethod
) => {
  event.preventDefault();
  movieSearchMethod(userInput);
  setUserInputMethod("");
};

export const handleMovieToSearchHelper = (
  movieInput,
  setMovieToSearchMethod
) => {
  setMovieToSearchMethod(movieInput);
};

export const handleApiCallHelper = async (userInput, setMovieMethod) => {
  const response = await Axios.get(
    `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&t=${userInput}`
  );

  return setMovieMethod(response.data);
};
