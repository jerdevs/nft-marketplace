import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
`;

export const HomeContainerStyled = styled.View`
  flex: 1;
`;

export const NFTContainerStyled = styled.View`
  z-index: 0;
`;

export const HomePageStyled = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const HomeTopPageStyled = styled.View`
  height: 300px;
  background-color: ${COLORS.primary};
`;

export const HomeBottomPageStyled = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;

export const NoNFTsFoundStyled = styled.Text`
  color: ${COLORS.white};
  padding: ${SIZES.font}px;
  font-family: ${FONTS.semiBold};
  font-size: ${SIZES.large}px;
`;
