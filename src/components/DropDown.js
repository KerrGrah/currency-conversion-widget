import React, { Component } from "react";
import styled from "styled-components";

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  handleSelect = (e, currency) => {
    e.stopPropagation();
    this.props.handleSelect.call(null, currency);
    this.setState(() => ({
      visible: false
    }));
  };

  render() {
    const currencies = this.props.currencies.map(currency => (
      <Option key={currency} onClick={e => this.handleSelect(e, currency)}>
        {currency}
      </Option>
    ));
    //console.log(this.props);
    return (
      <Container
        visible={this.state.visible}
        onMouseLeave={() => this.setState(state => ({ visible: false }))}
      >
        <Selected
          visible={!this.state.visible}
          onClick={() => this.setState(state => ({ visible: !state.visible }))}
        >
          {this.props.selected}
        </Selected>
        <Dropdown visible={this.state.visible}>{currencies}</Dropdown>
      </Container>
    );
  }
}
const Container = styled.div`
  position: absolute;
  text-align: center;
  max-height: 300px;
  font-weight: 300;
  width: 200px;
  top: 30px;
  right: 48%;
  padding-top: 20px;
  display: inline;
  @media (max-width: 490px) {
    left: -8%;
  }
  @media (max-width: 320px) {
    left: -18%;
  }
`;
const Selected = styled.div`
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  padding: 6px 6px 0 6px;
  text-align: center;
  font-size: 18px;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
  transition: all 350ms ease 300ms;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  max-height: ${({ visible }) => (visible ? "100px" : "0")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: all 400ms ease-in-out;
  ${({ visible }) => (!visible ? "overflow: hidden" : "")};
  bottom: 45px;
  z-index: 999;
`;
const Option = styled.div`
  &:first-of-type {
    border-radius: 10px 10px 0 0;
    padding-top: 10px;
  }
  &:last-of-type {
    border-radius: 0 0 10px 10px;
    padding-bottom: 10px;
  }
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 200ms ease;
  width: 80px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.8);
  &:hover {
    transform: scale(1.1);
    background: rgba(245, 245, 245, 0.8);
  }
`;
