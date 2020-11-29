import mockAxios from "axios";
import sampleMovie from "../fixtures";
import {
  handleApiCallHelper,
  setMovieToSearchHelper,
  handleFormSubmitHelper,
  isMovieObjectEmptyHelper,
  handleMovieToSearchHelper,
  handleChangeForTitleHelper,
} from "./index";

describe("Helper Functions Test Suite", () => {
  test("should validate handleChangeForTitleHelper ", () => {
    const setUserInputMethodMock = jest.fn();
    const eventFake = {
      target: {
        value: "dummyData",
      },
    };

    handleChangeForTitleHelper(eventFake, setUserInputMethodMock);

    expect(setUserInputMethodMock).toBeCalled();
  });

  test("should validate handleFormSubmitHelper ", () => {
    const setUserInputMethodMock = jest.fn();
    const movieSearchMethodMock = jest.fn();
    const userInputFake = "bad boys";
    const eventFake = {
      preventDefault: () => jest.fn(),
    };

    handleFormSubmitHelper(
      eventFake,
      userInputFake,
      movieSearchMethodMock,
      setUserInputMethodMock
    );

    expect(setUserInputMethodMock).toBeCalled();
    expect(movieSearchMethodMock).toBeCalled();
  });

  test("should validate handleMovieToSearchHelper ", () => {
    const setMovieToSearchMethodMock = jest.fn();
    const movieInputFake = "bad boys";

    handleMovieToSearchHelper(movieInputFake, setMovieToSearchMethodMock);

    expect(setMovieToSearchMethodMock).toBeCalled();
  });

  test("should validate handleApiCallHelper ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: sampleMovie })
    );

    const userInputFake = "hello";
    const setMovieMethodMock = jest.fn();

    await handleApiCallHelper(userInputFake, setMovieMethodMock);

    expect(setMovieMethodMock).toBeCalled();
  });

  test("should validate isMovieObjectEmptyHelper returns true ", () => {
    const movieFake = {};
    const results = isMovieObjectEmptyHelper(movieFake);

    expect(results).toBe(true);
  });

  test("should validate isMovieObjectEmptyHelper returns false ", () => {
    const results = isMovieObjectEmptyHelper(sampleMovie);

    expect(results).toBe(false);
  });

  test("should validate setMovieToSearchHelper ", () => {
    const movieInputFake = "hello";
    const setMovieToSearchMethod = jest.fn();
    setMovieToSearchHelper(movieInputFake, setMovieToSearchMethod);

    expect(setMovieToSearchMethod).toBeCalled();
  });
});
