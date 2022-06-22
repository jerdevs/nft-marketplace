import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const ButtonStyled = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: ${SIZES.font}px 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

export const EthIconStyled = styled.Image`
  width: 30px;
  height: 30px;
`;

export const BidBottomSheetContainerStyled = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const BidContainerStyled = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: ${SIZES.large}px;
`;

export const EthTextStyled = styled.Text`
  font-size: ${SIZES.large}px;
  font-family: ${FONTS.semiBold};
`;

export const BidInputStyled = styled.TextInput`
  color: ${COLORS.primary};
  width: 50%;
  border-radius: ${SIZES.font}px;
  background-color: ${COLORS.lightGray};
  padding: ${SIZES.font}px;
  text-align: center;
  font-size: ${SIZES.large}px;
  font-family: ${FONTS.semiBold};
  margin-right: ${SIZES.base}px;
`;

export const YourBidStyled = styled.Text`
  font-family: ${FONTS.bold};
  font-size: ${SIZES.large}px;
  padding-bottom: ${SIZES.large}px;
`;
