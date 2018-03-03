import * as actions from "../actions";

const round = val => Number(val.toFixed(2));

export default function state(
  state = {
    wallets: { EUR: 590, USD: 10000 },
    currencies: ["EUR", "USD", "GBP"],
    valueOne: "",
    valueTwo: "",
    selectedOne: "USD",
    selectedTwo: "EUR",
    rates: [],
    fetching: false,
    fetched: false,
    error: false
  },
  action
) {
  switch (action.type) {
    case actions.INPUT_CHANGE_ONE: {
      return {
        ...state,
        valueOne: action.value,
        valueTwo:
          round(
            action.value * state.rates[state.selectedOne][state.selectedTwo]
          ) || 0
      };
    }
    case actions.INPUT_CHANGE_TWO: {
      return {
        ...state,
        valueTwo: action.value,
        valueOne:
          round(
            action.value * state.rates[state.selectedTwo][state.selectedOne]
          ) || 0
      };
    }
    case actions.CURRENCY_SELECT_ONE: {
      return {
        ...state,
        selectedOne: action.value,
        valueTwo:
          round(
            state.valueOne * state.rates[action.value][state.selectedTwo]
          ) || 0
      };
    }
    case actions.CURRENCY_SELECT_TWO: {
      return {
        ...state,
        selectedTwo: action.value,
        valueOne:
          round(
            state.valueTwo * state.rates[action.value][state.selectedOne]
          ) || 0
      };
    }
    case actions.EXCHANGE: {
      const { wallets, selectedOne, selectedTwo, valueOne, valueTwo } = state;
      return {
        ...state,
        wallets: {
          ...wallets,
          [selectedOne]: round(wallets[selectedOne] - valueOne),
          [selectedTwo]: wallets[selectedTwo]
            ? round(wallets[selectedTwo] + +valueTwo)
            : +valueTwo
        },
        valueOne: 0,
        valueTwo: 0
      };
    }
    case actions.SWITCH_SELECTED: {
      return {
        ...state,
        selectedOne: state.selectedTwo,
        selectedTwo: state.selectedOne,
        valueOne: state.valueTwo,
        valueTwo: state.valueOne
      };
    }
    // RATES
    case actions.GET_RATES: {
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    }
    case actions.GET_RATES_FULFILLED: {
      return {
        ...state,
        rates: action.rates,
        fetching: false,
        fetched: true
      };
    }
    case actions.GET_RATES_FAILED: {
      return {
        ...state,
        error: true,
        fetching: false,
        fetched: false
      };
    }
  }
  return state;
}
