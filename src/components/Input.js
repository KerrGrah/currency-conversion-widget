import React, { Component } from "react";
import styled from "styled-components";

export default class Comp extends Component {
  render() {
    const { usingComma, value, handleChange, available, colors } = this.props;
    const val = usingComma ? String(value).replace(".", ",") : value;

    return (
      <Input
        type="text"
        value={val}
        placeholder="0"
        available={available}
        colors={colors}
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
  padding: 30px 10px 0 10px;
  text-align: right;
  font-size: 2.3em;
  background: ${({ colors }) => colors.bgLight};
  color: ${({ colors }) => colors.fontDark};
  box-shadow: inset 0 0 10px ${({ colors }) => colors.shadow};
  transition: all 500ms ease;
  &:focus {
    outline: none;
    box-shadow: inset 0 0 10px
      ${({ available, colors }) => (available ? colors.success : colors.danger)};
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  user-select: auto;
`;
