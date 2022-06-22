import styled from "styled-components/native";
import { SIZES } from "../../constants/theme";

export const BiddersContainerStyled = styled.View`
  flex-direction: row;
`;

export const BidderImageStyled = styled.Image<{ index: number }>`
  width: 48px;
  height: 48px;
  margin-left: ${(props): string =>
    props.index === 0 ? "0" : `-${SIZES.font}px`};
`;
