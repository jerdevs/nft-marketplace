import styled from "styled-components/native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../constants/theme";

export const EndDateContainerStyled = styled.View`
  padding: ${SIZES.base}px ${SIZES.font}px;
  background-color: ${COLORS.white};
  justify-content: center;
  align-items: center;
  elevation: 1;
  max-width: 50%;
  box-shadow: ${SHADOWS.light.shadowOffset.width}px
    ${SHADOWS.light.shadowOffset.height}px ${SHADOWS.light.shadowRadius}px
    ${SHADOWS.light.shadowColor};
`;

export const EndingInStyled = styled.Text`
  font-family: ${FONTS.regular};
  font-size: ${SIZES.small}px;
  color: ${COLORS.primary};
`;

export const TimeStyled = styled.Text`
  font-family: ${FONTS.semiBold};
  font-size: ${SIZES.medium}px;
  color: ${COLORS.primary};
`;
