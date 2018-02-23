import React, { Component } from "react";
import styled from "styled-components";
//import { numberWithCommas, validate } from "../util";

export default class Comp extends Component {
  render() {
    return (
      <Input
        type="number"
        lang="ru"
        value={this.props.value}
        placeholder="0"
        onChange={e => this.props.handleChange(e.target.value)}
      />
    );
  }
}

const Input = styled.input`
  margin: 48px 0;
  height: 100px;
  width: 90%;
  border: none;
  border-radius: 4px;
  padding: 10px;
  text-align: right;
  font-size: 3em;
  transition: border 200ms ease;
  &:focus {
    outline: none;
    box-shadow: inset 0 0 10px #888;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
