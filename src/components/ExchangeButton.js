import React from "react";
import styled from "styled-components";

export default ({ exchange }) => (
  <Container>
    <input type="button" value="Exchange" onClick={exchange} />
  </Container>
);

const Container = styled.div`
  position: absolute;
  bottom: 9px;
  left: 0;
  right: 0;
  text-align: center;
  & > input[type="button"] {
    background: #a491ad;
    font-size: 18px;
    font-weight: 200;
    color: #fff;
    border: none;
    border-radius: 2px;
    box-shadow: 0 1px 3px 0px #80718a;
    padding: 6px 20px;
    cursor: pointer;
    outline: none;
    transition: all 100ms ease-in-out;
    &:active {
      box-shadow: 0 0 0 0px #888;
      transform: scale(0.98);
      transform: translateY(2px);
    }
  }
`;
