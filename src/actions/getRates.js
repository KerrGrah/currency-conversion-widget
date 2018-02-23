import { makeActionCreator } from "./makeActionCreator";
export const GET_RATES = "GET_RATES";
export const GET_RATES_FETCHING = "GET_RATES_FETCHING";
export const GET_RATES_FULFILLED = "GET_RATES_FULFILLED";
export const GET_RATES_FAILED = "GET_RATES_FAILED";

export const getRates = makeActionCreator(GET_RATES);
export const getRatesFulfilled = makeActionCreator(
  GET_RATES_FULFILLED,
  "rates"
);
