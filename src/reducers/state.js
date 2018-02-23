import * as actions from "../actions";

const round = val => Number(val.toFixed(2));

export default function state(
  state = {
    currencies: ["EUR", "USD", "GBP", "CAD"],
    valueOne: "",
    valueTwo: "",
    selectedOne: "USD",
    selectedTwo: "EUR",
    rates: [],
    fetching: false,
    fetched: false
  },
  action
) {
  switch (action.type) {
    case actions.INPUT_CHANGE_ONE: {
      return {
        ...state,
        valueOne: action.value,
        valueTwo: round(
          action.value * state.rates[state.selectedOne][state.selectedTwo]
        )
      };
    }
    case actions.INPUT_CHANGE_TWO: {
      return {
        ...state,
        valueTwo: action.value,
        valueOne: round(
          action.value * state.rates[state.selectedTwo][state.selectedOne]
        )
      };
    }
    case actions.CURRENCY_SELECT_ONE: {
      return {
        ...state,
        selectedOne: action.value,
        valueTwo: round(
          state.valueOne * state.rates[action.value][state.selectedTwo]
        )
      };
    }
    case actions.CURRENCY_SELECT_TWO: {
      return {
        ...state,
        selectedTwo: action.value,
        valueOne: round(
          state.valueTwo * state.rates[action.value][state.selectedOne]
        )
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
        rates: action.rates,
        fetching: false,
        fetched: false
      };
    }
  }
  return state;
}
