import React from "react";
import { NFT } from "../../constants/data";
import {
  DetailsHeaderContainerStyled,
  DetailsHeaderImageStyled,
} from "./DetailsHeader.styled";
import CircleButton from "../CircleButton/CircleButton";
import { COLORS } from "../../constants/theme";
import Icon from "react-native-vector-icons/Ionicons";

interface DetailsHeaderProps {
  data: NFT;
  goBack?: () => void;
  onLike?: (nftId: string) => void;
}

const DetailsHeader: React.FC<DetailsHeaderProps> = (
  props: DetailsHeaderProps
): React.ReactElement => {
  const { data, goBack, onLike } = props;

  return (
    <DetailsHeaderContainerStyled>
      <DetailsHeaderImageStyled source={data.image} resizeMode="cover" />
      <CircleButton
        icon={<Icon name="chevron-back" size={24} color={COLORS.secondary} />}
        handlePress={goBack}
        left={16}
        top={10}
      />
      <CircleButton
        icon={
          data.hasLiked ? (
            <Icon name="heart" size={24} color={COLORS.red} />
          ) : (
            <Icon name="heart-outline" size={24} color={COLORS.primary} />
          )
        }
        handlePress={(): void => onLike && onLike(data.id)}
        right={16}
        top={10}
      />
    </DetailsHeaderContainerStyled>
  );
};

export default DetailsHeader;
