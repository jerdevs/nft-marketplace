import React from "react";
import { TouchableOpacityStyled } from "./CircleButton.styled";

interface CircleButtonProps {
  icon: React.ReactElement;
  top?: number;
  right?: number;
  left?: number;
  handlePress?: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = (
  props: CircleButtonProps
): React.ReactElement => {
  const { icon, top, right, left, handlePress } = props;

  return (
    <TouchableOpacityStyled
      top={top}
      right={right}
      left={left}
      onPress={handlePress}
    >
      {icon}
    </TouchableOpacityStyled>
  );
};

export default CircleButton;
