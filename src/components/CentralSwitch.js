import React, { Component } from "react";
import styled from "styled-components";

export default props => <Container onClick={props.switchSelected} />;

const Container = styled.div`
  position: absolute;
  margin-left: 10%;
  top: 185px;
  width: 40px;
  height: 30px;
  border-radius: 20px;
  background: #fff;
  z-index: 1;
`;
