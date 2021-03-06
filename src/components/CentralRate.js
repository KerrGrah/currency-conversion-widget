import React from "react";
import styled from "styled-components";

export default props => (
  <Container colors={props.colors}>
    <div>{toString(props)}</div>
  </Container>
);

const Container = styled.div`
  position: absolute;
  top: 191px;
  left: 0;
  right: 0;
  text-align: right;
  & > div {
    margin: 0 auto;
    display: inline;
    padding: 4px 10px;
    font-weight: 300;
    border-radius: 6px;
    background: ${({ colors }) => colors.bgLight};
    margin-right: 6%;
    color: ${({ colors }) => colors.fontLight};
  }
`;

const toString = ({ symbOne, symbTwo, rate }) =>
  rate ? `${symbOne}1 = ${symbTwo}${rate}` : ``;
