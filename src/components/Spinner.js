import React from "react";
import styled, { keyframes } from "styled-components";

export default () => <Spinner className="spinner" />;

const rotate360 = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;
const Spinner = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 500rem;
      border: 0.2em solid rgba(180, 180, 180, 0.1);
      width: 3rem;
      height: 3rem;
      margin: 0;
    }

    &:after {
      position: absolute;
      content: "";
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      animation: ${rotate360} 0.6s linear;
      animation-iteration-count: infinite;
      border-radius: 500rem;
      border-color: #bbb transparent transparent;
      border-style: solid;
      border-width: 0.2em;
      box-shadow: 0 0 0 1px transparent;
      width: 3rem;
      height: 3rem;
      margin: 0;
    }
  }
`;
