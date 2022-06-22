import styled from "styled-components/native";
import { COLORS, SHADOWS, SIZES } from "../../constants/theme";

export const NFTCardContainerStyled = styled.View`
  background-color: ${COLORS.white};
  border-radius: ${SIZES.font}px;
  margin-bottom: ${SIZES.extraLarge}px;
  margin: ${SIZES.base}px;
  box-shadow: ${SHADOWS.dark.shadowOffset.width}px
    ${SHADOWS.dark.shadowOffset.height}px ${SHADOWS.dark.shadowRadius}px
    ${SHADOWS.dark.shadowColor};
`;

export const NFTCardStyled = styled.View`
  width: 100%;
  height: 240px;
`;

export const NFTCardImageStyled = styled.Image`
  height: 100%;
  width: 100%;
  border-top-left-radius: ${SIZES.font}px;
  border-top-right-radius: ${SIZES.font}px;
`;
