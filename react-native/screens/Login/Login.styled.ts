import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
`;

export const LogoStyled = styled.Image`
  width: 127.5px;
  height: 34px;
`;

export const FeatureImageStyled = styled.Image`
  width: 100%;
  height: 250px;
  margin: ${SIZES.large * 1.5}px 0;
`;

export const BackgroundStyled = styled.View`
  background-color: ${COLORS.primary};
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const TitleStyled = styled.Text`
  font-size: ${SIZES.extraLarge * 1.2}px;
  color: ${COLORS.lime};
  font-family: ${FONTS.staatliches};
  padding: 0 ${SIZES.large}px ${SIZES.large}px;
  text-align: center;
`;

export const DescriptionStyled = styled.Text`
  color: ${COLORS.white};
  font-size: ${SIZES.medium}px;
  text-align: center;
  padding: 0 ${SIZES.extraLarge * 2}px;
  line-height: ${SIZES.large}px;
`;

export const NameTextInputStyled = styled.TextInput`
  color: ${COLORS.white};
  margin: ${SIZES.extraLarge * 1.5}px 0 ${SIZES.font}px 0;
  width: 50%;
  border-radius: ${SIZES.font}px;
  background-color: ${COLORS.gray};
  padding: ${SIZES.font}px;
  text-align: center;
`;
