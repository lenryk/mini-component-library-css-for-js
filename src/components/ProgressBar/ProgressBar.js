/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS, SIZES } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper as={size === "large" ? WrapperLarge : Wrapper}>
      <Bar
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        value={value}
        as={value > 99 ? BarFull : Bar}
        size={size}
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Bar>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  background: rgba(128, 128, 128, 0.15);
  width: 362px;
`;

const WrapperLarge = styled(Wrapper)`
  border-radius: 8px;
  outline: rgba(128, 128, 128, 0.15) solid 8px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  width: ${(props) => props.value + `%`};
  height: ${(props) => {
    if (props.size === "small") {
      return SIZES.small;
    } else if (props.size === "medium") {
      return SIZES.medium;
    } else {
      return SIZES.large;
    }
  }};
`;

const BarFull = styled(Bar)`
  border-radius: 4px;
`;
