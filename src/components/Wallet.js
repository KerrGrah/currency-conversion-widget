import React, { Component } from "react";
import styled from "styled-components";
import { numberWithCommas } from "../util";
export default ({ wallet, symbol, colors }) => (
  <Wallet colors={colors}>{`${symbol}${numberWithCommas(wallet)}`}</Wallet>
);

const Wallet = styled.p`
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  color: ${({ colors }) => colors.fontLight};
`;
