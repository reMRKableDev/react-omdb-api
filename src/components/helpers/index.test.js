import { handleChangeForTitleHelper } from "./index";

describe("SearchInto Test Suite", () => {
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
});
