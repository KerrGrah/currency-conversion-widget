import React from "react";
import styled from "styled-components";

export default props => <Container>{toString(props)}</Container>;

const Container = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 187px;
  padding: 4px 10px;
  font-weight: 300;
  border-radius: 6px;
  background: #fff;
  z-index: 1;
`;

const toString = ({ symbOne, symbTwo, rate }) =>
  rate ? `${symbOne}1 = ${symbTwo}${rate}` : ``;
