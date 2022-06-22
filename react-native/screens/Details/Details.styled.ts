import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
`;

export const DetailsDescriptionStyled = styled.View`
  padding: ${SIZES.font}px;
`;

export const CurrentBidsTextStyled = styled.Text`
  font-size: ${SIZES.font}px;
  font-family: ${FONTS.semiBold};
  color: ${COLORS.primary};
`;
