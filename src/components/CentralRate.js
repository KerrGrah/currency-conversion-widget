import React, { Component } from "react";
import styled from "styled-components";

export default props => <Container>{toString(props)}</Container>;

const Container = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -40px;
  top: 187px;
  min-width: 40px;
  padding: 4px 10px;
  border-radius: 6px;
  background: #fff;
  z-index: 1;
`;

const toString = ({ symbOne, symbTwo, rate }) =>
  rate ? `${symbOne}1 = ${symbTwo}${rate}` : ``;
