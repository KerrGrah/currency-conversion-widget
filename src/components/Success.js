import React from "react";
import styled, { keyframes } from "styled-components";
import Success from "../assets/success";

export default ({ color }) => (
  <Container>
    <Success color={color} />
  </Container>
);

const flyUp = keyframes`
    0% {
        transform: translate(-50%, -0vh);
        opacity: 0.1;
    }
    30% {
        transform: translate(-50%, -63vh);
        opacity: 0.8;
    }
    90% {
        transform: translate(-50%, -63vh);
        opacity: 0.85;
    }
    100% {
        transform: translate(-50%, -63vh);
        opacity: 0.1;
    }
  }
`;
const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin: 0 auto;
  z-index: 100;
  animation: ${flyUp} 1100ms;
`;
