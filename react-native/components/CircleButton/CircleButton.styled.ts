import styled from "styled-components/native";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";

export const TouchableOpacityStyled = styled.TouchableOpacity<{
  top?: number;
  right?: number;
  left?: number;
}>`
  width: 40px;
  height: 40px;
  background-color: ${COLORS.white};
  position: absolute;
  border-radius: ${SIZES.extraLarge}px;
  align-items: center;
  justify-content: center;
  top: ${(props): string => (props.top ? `${props.top.toString()}px` : "auto")};
  right: ${(props): string =>
    props.right ? `${props.right.toString()}px` : "auto"};
  left: ${(props): string =>
    props.left ? `${props.left.toString()}px` : "auto"};
  box-shadow: ${SHADOWS.light.shadowOffset.width}px
    ${SHADOWS.light.shadowOffset.height}px ${SHADOWS.light.shadowRadius}px
    ${SHADOWS.light.shadowColor};
`;

export const ButtonImageStyled = styled.Image`
  height: 24px;
  width: 24px;
`;
