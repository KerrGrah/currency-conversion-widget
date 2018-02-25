import { call, put, take, select } from "redux-saga/effects";
import {
  GET_RATES,
  GET_RATES_FULFILLED,
  GET_RATES_FAILED,
  getRatesFulfilled
} from "../actions";
import { ratesUrl } from "../config";

const getCurrenciesArray = state => state.state.currencies;

const fetchRate = currencies => fetch(`${ratesUrl}symbols=${currencies}`);

const round = num => Number(num.toFixed(5));
const convertAllRates = data => {
  const keys = Object.keys(data);
  const allRates = {
    EUR: {
      ...data,
      EUR: 1
    }
  };

  const convertThroughBase = (currentKey, thisBase) => {
    const obj = {};
    keys.forEach(key => {
      if (key === currentKey) {
        obj[key] = 1;
      } else {
        obj[key] = round(thisBase * allRates.EUR[key]);
      }
    });
    return obj;
  };

  keys.forEach(key => {
    const thisBase = round(1 / data[key]);
    allRates[key] = {
      EUR: thisBase,
      ...convertThroughBase(key, thisBase)
    };
  });
  return allRates;
};

const getRates = function*() {
  const currenciesArray = yield select(getCurrenciesArray);

  const response = yield call(fetchRate, currenciesArray);
  if (response.ok) {
    const data = yield response.json();
    yield put(getRatesFulfilled(convertAllRates(data.rates)));
  } else {
    yield put({ type: GET_RATES_FAILED });
  }
};

export const getRatesSaga = function*() {
  while (true) {
    yield take(GET_RATES);
    yield call(getRates);
  }
};
