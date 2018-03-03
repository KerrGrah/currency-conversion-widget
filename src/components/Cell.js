import React, { Component } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import Input from "./Input";
import Wallet from "./Wallet";

export default class Cell extends Component {
  render() {
    const {
      placement,
      currencies,
      selected,
      handleSelect,
      value,
      handleChange,
      usingComma,
      wallet = 0,
      symbol
    } = this.props;

    return (
      <Container placement={placement}>
        <DropDown
          currencies={currencies}
          selected={selected}
          handleSelect={handleSelect}
        />
        <Wallet wallet={wallet} symbol={symbol} />
        <Input
          value={value}
          handleChange={handleChange}
          usingComma={usingComma}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  background: ${({ placement }) =>
    placement === "bottom"
      ? "linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.1))"
      : "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0))"};
  position: relative;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  height: 200px;
  text-align: center;
  user-select: none;
`;
