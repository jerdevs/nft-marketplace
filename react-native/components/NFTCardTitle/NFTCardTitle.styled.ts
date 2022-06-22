import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const NFTCardNameStyled = styled.Text<{ nameSize: number }>`
  font-family: ${FONTS.semiBold};
  color: ${COLORS.primary};
  font-size: ${(props): string => `${props.nameSize.toString()}px`};
`;

export const NFTCardCreatorStyled = styled.Text<{ creatorSize: number }>`
  font-family: ${FONTS.regular};
  color: ${COLORS.primary};
  font-size: ${(props): string => `${props.creatorSize.toString()}px`};
`;

export const NFTCardLikesStyled = styled.Text`
  font-size: ${SIZES.small}px;
  font-family: ${FONTS.semiBold};
  padding-top: ${SIZES.base}px;
`;
