import React, { Component } from "react";
import styled from "styled-components";
import svg from "../assets/switch";

export default class Swicth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = switchSelected => {
    this.setState(
      ({ clicked }) => ({ clicked: !clicked }),
      // let animation finish before action dispatch
      () => {
        setTimeout(() => {
          switchSelected();
        }, 350);
      }
    );
  };
  render() {
    return (
      <Container
        clicked={this.state.clicked}
        onClick={this.handleClick.bind(null, this.props.switchSelected)}
      >
        {svg("#666")}
      </Container>
    );
  }
}

const Container = styled.div`
  position: absolute;
  margin-left: 8%;
  top: 185px;
  width: 34px;
  height: 34px;
  padding: 7px;
  border-radius: 20px;
  background: #fff;
  cursor: pointer;
  z-index: 1;
  transition: transform 400ms ease-in-out;
  ${({ clicked }) => (clicked ? "transform: rotate(180deg)" : "")};
  @media (max-width: 490px) {
    top: 180px;
    width: 40px;
    height: 40px;
  }
`;
