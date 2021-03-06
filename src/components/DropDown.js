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
    const colors = this.props.colors;
    const currencies = this.props.currencies.map(currency => (
      <Option
        key={currency}
        onClick={e => this.handleSelect(e, currency)}
        colors={colors}
      >
        {currency}
      </Option>
    ));

    return (
      <Container
        visible={this.state.visible}
        onMouseLeave={() => this.setState(state => ({ visible: false }))}
      >
        <Selected
          visible={!this.state.visible}
          onClick={() => this.setState(state => ({ visible: !state.visible }))}
          colors={colors}
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
  padding-top: 20px;
  display: inline;
  z-index: 1;
  left: -38px;
  @media (max-width: 690px) {
    left: -32px;
  }
`;

const Selected = styled.div`
  color: ${({ colors }) => colors.fontDark};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  padding: 6px 6px 0 6px;
  text-align: center;
  font-size: 20px;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
  transition: all 350ms ease 500ms;
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
  color: ${({ colors }) => colors.fontDark};
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
  background: rgba(255, 255, 255, 0.85);
  &:hover {
    transform: scale(1.1);
    background: rgba(245, 245, 245, 0.9);
  }
`;
