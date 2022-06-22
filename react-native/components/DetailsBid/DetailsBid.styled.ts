import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const DetailsBidContainerStyled = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${SIZES.base}px 0;
  padding: 0 ${SIZES.base * 2}px;
`;

export const BidderImageStyled = styled.Image`
  width: 48px;
  height: 48px;
`;

export const BidderNameStyled = styled.Text`
  font-family: ${FONTS.semiBold};
  font-size: ${SIZES.small}px;
  color: ${COLORS.primary};
`;

export const BidDateStyled = styled.Text`
  font-family: ${FONTS.regular};
  font-size: ${SIZES.small - 2}px;
  color: ${COLORS.secondary};
  margin-top: 3px;
`;
