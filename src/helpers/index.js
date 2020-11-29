import getApiDataService from "../services";

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
  const responseData = await getApiDataService(userInput);

  return setMovieMethod(responseData);
};
