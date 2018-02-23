import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";
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

class Widget extends Component {
  componentDidMount() {
    setInterval(() => {
      // this.props.dispatch(getRates());
    }, 10000);
    this.props.dispatch(getRates());
  }
  handleChange = (val, action, currency) => {
    const rate = this.props.data[currency];
    this.props.dispatch(action(val, rate));
  };
  render() {
    console.log(this.props);

    return (
      <Container>
        <Cell
          placement="top"
          rates={this.props.rates}
          value={this.props.valueOne}
          currencies={this.props.currencies}
          selected={this.props.selectedOne}
          handleSelect={val => this.props.dispatch(currencySelectOne(val))}
          handleChange={val =>
            this.handleChange(val, inputChangeOne, this.props.selectedOne)
          }
        />
        <CentralSwitch
          switchSelected={() => this.props.dispatch(switchSelected())}
        />
        <CentralRate
          symbOne={getSymbolFromCurrency(this.props.selectedOne)}
          symbTwo={getSymbolFromCurrency(this.props.selectedTwo)}
          rate={
            this.props.data[this.props.selectedOne]
              ? this.props.data[this.props.selectedOne][this.props.selectedTwo]
              : ""
          }
        />
        <Cell
          placement="bottom"
          rates={this.props.rates}
          value={this.props.valueTwo}
          currencies={this.props.currencies}
          selected={this.props.selectedTwo}
          handleSelect={val => this.props.dispatch(currencySelectTwo(val))}
          handleChange={val =>
            this.handleChange(val, inputChangeTwo, this.props.selectedTwo)
          }
        />
      </Container>
    );
  }
}
// £
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
  @media (max-width: 600px) {
    width: 70%;
  }
  @media (max-width: 370px) {
    width: 100%;
  }
`;

const mapStateToProps = store => {
  return {
    data: store.state.rates,
    valueOne: store.state.valueOne,
    valueTwo: store.state.valueTwo,
    selectedOne: store.state.selectedOne,
    selectedTwo: store.state.selectedTwo,
    currencies: store.state.currencies
  };
};

export default connect(mapStateToProps)(Widget);
