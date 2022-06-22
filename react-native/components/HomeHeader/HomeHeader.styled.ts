import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const HomeHeaderBackgroundStyled = styled.View`
  background-color ${COLORS.primary};
  padding: ${SIZES.font}px;
`;

export const HomeHeaderContainerStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyled = styled.Image`
  width: 90px;
  height: 24px;
`;

export const AvatarContainerStyled = styled.View`
  width: 45px;
  height: 45px;
`;

export const AvatarStyled = styled.Image`
  width: 100%;
  height: 100%;
`;

export const BadgeStyled = styled.Image`
  position: absolute;
  height: 16px;
  width: 16px;
  bottom: 0;
  right: 0;
`;

export const GreetingContainerStyled = styled.View`
  margin: ${SIZES.font}px 0;
`;

export const NameStyled = styled.Text`
  font-family: ${FONTS.regular};
  font-size: ${SIZES.small}px;
  color: ${COLORS.white};
`;

export const DescriptionStyled = styled.Text`
  font-family: ${FONTS.bold};
  font-size: ${SIZES.large}px;
  color: ${COLORS.white};
  margin-top: ${SIZES.base / 2}px;
`;

export const SearchContainerStyled = styled.View`
  margin-top: ${SIZES.font}px;
  width: 100%;
  border-radius: ${SIZES.font}px;
  background-color: ${COLORS.gray};
  flex-direction: row;
  align-items: center;
  padding: ${SIZES.font}px;
`;

export const SearchImageStyled = styled.View`
  margin-right: ${SIZES.base}px;
`;

export const SearchTextInputStyled = styled.TextInput`
  flex: 1;
  color: ${COLORS.white};
`;
