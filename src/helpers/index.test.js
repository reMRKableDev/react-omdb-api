import mockAxios from "axios";
import { fakeSampleMovie, fakeUserInput } from "../fixtures";
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
        value: fakeUserInput,
      },
    };

    handleChangeForTitleHelper(eventFake, setUserInputMethodMock);

    expect(setUserInputMethodMock).toBeCalled();
  });

  test("should validate handleFormSubmitHelper ", () => {
    const setUserInputMethodMock = jest.fn();
    const movieSearchMethodMock = jest.fn();
    const eventFake = {
      preventDefault: () => jest.fn(),
    };

    handleFormSubmitHelper(
      eventFake,
      fakeUserInput,
      movieSearchMethodMock,
      setUserInputMethodMock
    );

    expect(setUserInputMethodMock).toBeCalled();
    expect(movieSearchMethodMock).toBeCalled();
  });

  test("should validate handleMovieToSearchHelper ", () => {
    const setMovieToSearchMethodMock = jest.fn();
    handleMovieToSearchHelper(fakeUserInput, setMovieToSearchMethodMock);

    expect(setMovieToSearchMethodMock).toBeCalled();
  });

  test("should validate handleApiCallHelper ", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: fakeSampleMovie })
    );

    const setMovieMethodMock = jest.fn();
    await handleApiCallHelper(fakeUserInput, setMovieMethodMock);

    expect(setMovieMethodMock).toBeCalled();
  });

  test("should validate isMovieObjectEmptyHelper returns true ", () => {
    const results = isMovieObjectEmptyHelper({});

    expect(results).toBe(true);
  });

  test("should validate isMovieObjectEmptyHelper returns false ", () => {
    const results = isMovieObjectEmptyHelper(fakeSampleMovie);

    expect(results).toBe(false);
  });

  test("should validate setMovieToSearchHelper ", () => {
    const setMovieToSearchMethod = jest.fn();
    setMovieToSearchHelper(fakeUserInput, setMovieToSearchMethod);

    expect(setMovieToSearchMethod).toBeCalled();
  });
});
