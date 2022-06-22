import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const NFTCardPriceContainerStyled = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NFTCardPriceImageStyled = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;

export const NFTCardPriceStyled = styled.Text`
  font-family: ${FONTS.medium};
  font-size: ${SIZES.font}px;
  color: ${COLORS.primary};
`;
