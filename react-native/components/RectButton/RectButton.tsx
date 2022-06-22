import React from "react";
import { TitleStyled, TouchableOpacityStyled } from "./RectButton.styled";

interface RectButtonProps {
  title: string;
  fontSize: number;
  width?: number;
  shadow?: string;
  disabled?: boolean;
  handlePress?: () => void;
}

const RectButton: React.FC<RectButtonProps> = (
  props: RectButtonProps
): React.ReactElement => {
  const { title, width, fontSize, shadow, disabled, handlePress } = props;

  return (
    <TouchableOpacityStyled
      shadow={shadow}
      width={width}
      disabled={disabled}
      onPress={handlePress}
    >
      <TitleStyled fontSize={fontSize} shadow={shadow}>
        {title}
      </TitleStyled>
    </TouchableOpacityStyled>
  );
};

export default RectButton;
