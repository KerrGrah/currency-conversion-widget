import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";
import { validate } from "./util";
import { colors } from "./styleConstants";
import {
  getRates,
  inputChangeOne,
  inputChangeTwo,
  currencySelectOne,
  currencySelectTwo,
  switchSelected,
  exchange
} from "./actions";
import Cell from "./components/Cell";
import CentralRate from "./components/CentralRate";
import CentralSwitch from "./components/CentralSwitch";
import Spinner from "./components/Spinner";
import ExchangeButton from "./components/ExchangeButton";
import Success from "./components/Success";

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "0",
      commaForDecimal: false,
      animateSuccess: false
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

  exchange = () => {
    if (
      this.props.wallets[this.props.selectedOne] >= +this.props.valueOne &&
      this.props.selectedOne !== this.props.selectedTwo &&
      +this.props.valueOne > 0
    ) {
      this.props.dispatch(exchange());
      this.animateSuccess();
    }
  };

  animateSuccess = () => {
    this.setState(() => ({
      animateSuccess: true
    }));
    setTimeout(() => {
      this.setState(() => ({
        animateSuccess: false
      }));
    }, 1090);
  };

  render() {
    const {
      wallets,
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

    const symbOne = getSymbolFromCurrency(selectedOne);
    const symbTwo = getSymbolFromCurrency(selectedTwo);

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
      <Container colors={colors}>
        <Cell
          placement="top"
          rates={rates}
          value={valueOne}
          currencies={currencies}
          selected={selectedOne}
          wallet={wallets[selectedOne]}
          symbol={symbOne}
          usingComma={this.state.commaForDecimal}
          available={wallets[selectedOne] >= valueOne}
          colors={colors}
          handleSelect={val => dispatch(currencySelectOne(val))}
          handleChange={val =>
            this.handleChange(val, inputChangeOne, selectedOne)
          }
        />
        <CentralSwitch
          switchSelected={() => dispatch(switchSelected())}
          colors={colors}
        />
        <CentralRate
          symbOne={symbOne}
          symbTwo={symbTwo}
          rate={data[selectedOne][selectedTwo]}
          colors={colors}
        />
        <Cell
          placement="bottom"
          rates={rates}
          value={valueTwo}
          currencies={currencies}
          selected={selectedTwo}
          wallet={wallets[selectedTwo]}
          symbol={symbTwo}
          usingComma={this.state.commaForDecimal}
          colors={colors}
          available={wallets[selectedOne] >= valueOne}
          handleSelect={val => dispatch(currencySelectTwo(val))}
          handleChange={val =>
            this.handleChange(val, inputChangeTwo, selectedTwo)
          }
        />
        <ExchangeButton colors={colors} exchange={this.exchange} />
        {this.state.animateSuccess && <Success color={colors.success} />}
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
  background: ${({ colors }) => colors.bgGradient};
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
    wallets: store.state.wallets,
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
