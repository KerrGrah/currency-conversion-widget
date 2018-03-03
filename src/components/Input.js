import React, { Component } from "react";
import styled from "styled-components";

export default class Comp extends Component {
  render() {
    const { usingComma, value, handleChange } = this.props;
    const val = usingComma ? String(value).replace(".", ",") : value;

    return (
      <Input
        type="text"
        value={val}
        placeholder="0"
        onChange={({ target }) => handleChange(target.value)}
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
