import React from "react";
import styled from "styled-components";

export default ({ exchange, colors }) => (
  <Container>
    <Input colors={colors} type="button" value="Exchange" onClick={exchange} />
  </Container>
);

const Container = styled.div`
  position: absolute;
  bottom: 9px;
  left: 0;
  right: 0;
  text-align: center;
`;

const Input = styled.input`
  background: ${({ colors }) => colors.buttonPrimary};
  font-size: 18px;
  font-weight: 200;
  color: ${({ colors }) => colors.buttonPrimaryText};
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0px ${({ colors }) => colors.shadow};
  padding: 6px 20px;
  cursor: pointer;
  outline: none;
  transition: all 100ms ease-in-out;
  &:active {
    box-shadow: 0 0 0 0px;
    transform: scale(0.98);
    transform: translateY(2px);
  }
`;
