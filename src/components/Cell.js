import React, { Component } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import Input from "./Input";

export default class Cell extends Component {
  render() {
    //console.log(this.props);
    return (
      <Container placement={this.props.placement}>
        <DropDown
          currencies={this.props.currencies}
          selected={this.props.selected}
          handleSelect={this.props.handleSelect}
        />
        <Input
          value={this.props.value}
          handleChange={this.props.handleChange}
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
`;
