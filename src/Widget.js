import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";
import { validate } from "./util";
import {
  getRates,
  inputChangeOne,
  inputChangeTwo,
  currencySelectOne,
  currencySelectTwo,
  switchSelected
} from "./actions";
import Cell from "./components/Cell";
import CentralRate from "./components/CentralRate";
import CentralSwitch from "./components/CentralSwitch";
import Spinner from "./components/Spinner";

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: 0,
      commaForDecimal: false
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.props.dispatch(getRates());
    }, 10000);
    this.props.dispatch(getRates());
  }
  handleChange = (val, action, currency) => {
    val = validate(val) !== false ? validate(val) : this.state.inputVal;
    const rate = this.props.data[currency];
    this.setState(() => ({
      inputVal: val,
      commaForDecimal: val.includes(",")
    }));
    this.props.dispatch(action(val.replace(",", "."), rate));
  };
  render() {
    const {
      error,
      data,
      selectedOne,
      selectedTwo,
      rates,
      valueOne,
      valueTwo,
      currencies,
      dispatch
    } = this.props;

    if (error) {
      return (
        <Error>
          Something's gone wrong...
          <br />
          <br />
          Please reload the page or try again later
        </Error>
      );
    }
    if (!data[selectedOne]) {
      return <Spinner />;
    }
    return (
      <Container>
        <Cell
          placement="top"
          rates={rates}
          value={valueOne}
          currencies={currencies}
          selected={selectedOne}
          usingComma={this.state.commaForDecimal}
          handleSelect={val => dispatch(currencySelectOne(val))}
          handleChange={val =>
            this.handleChange(val, inputChangeOne, selectedOne)
          }
        />
        <CentralSwitch switchSelected={() => dispatch(switchSelected())} />
        <CentralRate
          symbOne={getSymbolFromCurrency(selectedOne)}
          symbTwo={getSymbolFromCurrency(selectedTwo)}
          rate={data[selectedOne][selectedTwo]}
        />
        <Cell
          placement="bottom"
          rates={rates}
          value={valueTwo}
          currencies={currencies}
          selected={selectedTwo}
          usingComma={this.state.commaForDecimal}
          handleSelect={val => dispatch(currencySelectTwo(val))}
          handleChange={val =>
            this.handleChange(val, inputChangeTwo, selectedTwo)
          }
        />
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0;
  margin-top: 160px;
  box-shadow: 1px 1px 10px #111;
  width: 300px;
  height: 400px;
  border-radius: 4px;
  background: linear-gradient(#c7b9e5, pink);
  @media (max-width: 490px) {
    width: 90%;
  }
  @media (max-width: 340px) {
    width: 98%;
  }
`;
const Error = styled.p`
  text-align: center;
  margin: 0 auto;
  margin-top: 40vh;
  font-weight: 300;
  color: #fff;
`;

const mapStateToProps = store => {
  return {
    data: store.state.rates,
    valueOne: store.state.valueOne,
    valueTwo: store.state.valueTwo,
    selectedOne: store.state.selectedOne,
    selectedTwo: store.state.selectedTwo,
    currencies: store.state.currencies,
    error: store.state.error
  };
};

export default connect(mapStateToProps)(Widget);
