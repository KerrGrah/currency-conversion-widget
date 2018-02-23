import { makeActionCreator } from "./makeActionCreator";
export const INPUT_CHANGE_ONE = "INPUT_CHANGE_ONE";
export const INPUT_CHANGE_TWO = "INPUT_CHANGE_TWO";

export const inputChangeOne = makeActionCreator(
  INPUT_CHANGE_ONE,
  "value",
  "rate"
);
export const inputChangeTwo = makeActionCreator(
  INPUT_CHANGE_TWO,
  "value",
  "rate"
);
