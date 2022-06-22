import styled from "styled-components/native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../../constants/theme";
import { ShadowType } from "../../constants/theme";

export const TouchableOpacityStyled = styled.TouchableOpacity<{
  shadow?: string;
  width?: number;
}>`
  background-color: ${(props): string =>
    props.shadow
      ? isDarkTheme(props.shadow)
        ? COLORS.primary
        : COLORS.white
      : COLORS.primary};
  border-radius: ${SIZES.extraLarge}px;
  padding: ${SIZES.small}px;
  box-shadow: ${(props): string =>
    props.shadow ? getBoxShadow(props.shadow) : "none"};
  width: ${(props): string =>
    props.width ? `${props.width.toString()}px` : "auto"};
`;

export const TitleStyled = styled.Text<{ fontSize: number; shadow?: string }>`
  font-family: ${FONTS.semiBold};
  font-size: ${(props): string => `${props.fontSize.toString()}px`};
  color: ${(props): string =>
    props.shadow
      ? isDarkTheme(props.shadow)
        ? COLORS.white
        : COLORS.primary
      : COLORS.white};
  text-align: center;
`;

const getBoxShadow = (shadow: string): string => {
  return isLightTheme(shadow)
    ? darkThemeShadow
    : isDarkTheme(shadow)
    ? lightThemeShadow
    : "";
};

const darkThemeShadow = `${SHADOWS.light.shadowOffset.width}px ${SHADOWS.light.shadowOffset.height}px ${SHADOWS.light.shadowRadius}px ${SHADOWS.light.shadowColor}`;

const lightThemeShadow = `${SHADOWS.dark.shadowOffset.width}px ${SHADOWS.dark.shadowOffset.height}px ${SHADOWS.dark.shadowRadius}px ${SHADOWS.dark.shadowColor}`;

const isLightTheme = (shadow: string): boolean => {
  return shadow === ShadowType.LIGHT;
};

const isDarkTheme = (shadow: string): boolean => {
  return shadow === ShadowType.DARK;
};
