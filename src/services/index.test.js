import mockAxios from "axios";
import getApiDataService from "./index";
import { fakeSampleMovie, fakeUserInput } from "../fixtures";

const { REACT_APP_API_KEY } = process.env;

describe("API Service Test Suite", () => {
  test("should validate calling axios and returning data", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: fakeSampleMovie })
    );
    const apiData = await getApiDataService(fakeUserInput);

    expect(apiData).toEqual(fakeSampleMovie);
    expect(mockAxios.get).toHaveBeenCalled();
    expect(mockAxios.get).toHaveBeenCalledWith(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&t=${fakeUserInput}`
    );
  });
});
