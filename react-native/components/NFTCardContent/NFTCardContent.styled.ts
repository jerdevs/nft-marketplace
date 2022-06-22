import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const NFTCardTextContainerStyled = styled.View`
  width: 100%;
  padding: ${SIZES.font}px;
`;

export const NFTCardPriceCTAContainerStyled = styled.View`
  margin-top: ${SIZES.font}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BidderStyled = styled.Text`
  font-size: ${SIZES.small}px;
  padding-top: ${SIZES.base}px;
  font-family: ${FONTS.regular};
`;

export const BiddedStyled = styled.Text`
  color: ${COLORS.green};
  font-style: italic;
`;
