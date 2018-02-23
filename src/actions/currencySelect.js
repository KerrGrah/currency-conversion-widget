import { makeActionCreator } from "./makeActionCreator";
export const CURRENCY_SELECT_ONE = "CURRENCY_SELECT_ONE";
export const CURRENCY_SELECT_TWO = "CURRENCY_SELECT_TWO";

export const currencySelectOne = makeActionCreator(
  CURRENCY_SELECT_ONE,
  "value"
);
export const currencySelectTwo = makeActionCreator(
  CURRENCY_SELECT_TWO,
  "value"
);
