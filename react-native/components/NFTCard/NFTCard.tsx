import React from "react";
import { NFT } from "../../constants/data";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  NFTCardContainerStyled,
  NFTCardImageStyled,
  NFTCardStyled,
} from "./NFTCard.styled";
import CircleButton from "../CircleButton/CircleButton";
import NFTCardContent from "../NFTCardContent/NFTCardContent";
import { RootStackParamList } from "../../App";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/theme";

interface NFTCardProps {
  data: NFT;
  onLike?: (nftId: string) => void;
}

const NFTCard: React.FC<NFTCardProps> = (
  props: NFTCardProps
): React.ReactElement => {
  const navigate = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { data, onLike } = props;

  return (
    <NFTCardContainerStyled>
      <NFTCardStyled>
        <NFTCardImageStyled source={data.image} resizeMode="cover" />
      </NFTCardStyled>
      <CircleButton
        icon={
          data.hasLiked ? (
            <Icon name="heart" size={24} color={COLORS.red} />
          ) : (
            <Icon name="heart-outline" size={24} color={COLORS.primary} />
          )
        }
        top={10}
        right={10}
        handlePress={(): void => onLike && onLike(data.id)}
      />
      <NFTCardContent
        title={data.name}
        creator={data.creator}
        price={data.price}
        likes={data.likes}
        bids={data.bids}
        endTime={data.endTime}
        onPlaceBid={(): void => navigate.navigate("Details", { data })}
      />
    </NFTCardContainerStyled>
  );
};

export default NFTCard;
