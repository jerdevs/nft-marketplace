import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const DetailsDescriptionContainerStyled = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsDescriptionStyled = styled.View`
  margin: ${SIZES.extraLarge * 1.5}px 0;
`;

export const DetailsDescriptionTitleStyled = styled.Text`
  font-size: ${SIZES.font}px;
  font-family: ${FONTS.semiBold};
  color: ${COLORS.primary};
`;

export const DetailsDescriptionViewStyled = styled.View`
  margin-top: ${SIZES.base}px;
`;

export const DetailsDescriptionTextStyled = styled.Text`
  font-size: ${SIZES.small}px;
  font-family: ${FONTS.regular};
  color: ${COLORS.secondary};
  line-height: ${SIZES.large}px;
`;

export const ReadMoreTextStyled = styled.Text`
  font-size: ${SIZES.small}px;
  font-family: ${FONTS.semiBold};
  color: ${COLORS.primary};
`;
