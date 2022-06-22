import { View } from "react-native";
import React from "react";
import {
  NFTCardCreatorStyled,
  NFTCardNameStyled,
  NFTCardLikesStyled,
} from "./NFTCardTitle.styled";

interface NFTCardTitleProps {
  title: string;
  creator: string;
  nameSize: number;
  creatorSize: number;
  likes: number;
}

const NFTCardTitle: React.FC<NFTCardTitleProps> = (
  props: NFTCardTitleProps
): React.ReactElement => {
  const { title, creator, nameSize, creatorSize, likes } = props;

  return (
    <View>
      <NFTCardNameStyled nameSize={nameSize}>{title}</NFTCardNameStyled>
      <NFTCardCreatorStyled creatorSize={creatorSize}>
        {creator}
      </NFTCardCreatorStyled>
      <NFTCardLikesStyled>{likes.toLocaleString()} likes</NFTCardLikesStyled>
    </View>
  );
};

export default NFTCardTitle;
