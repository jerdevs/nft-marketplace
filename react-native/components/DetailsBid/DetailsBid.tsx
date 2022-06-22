import { View } from "react-native";
import React from "react";
import { Bid } from "../../constants/data";
import {
  BidderImageStyled,
  BidderNameStyled,
  BidDateStyled,
  DetailsBidContainerStyled,
} from "./DetailsBid.styled";
import NFTEthPrice from "../NFTEthPrice/NFTEthPrice";

interface DetailsBidProps {
  bid: Bid;
}

const DetailsBid: React.FC<DetailsBidProps> = (
  props: DetailsBidProps
): React.ReactElement => {
  const {
    bid: { image, name, date, price },
  } = props;

  return (
    <DetailsBidContainerStyled>
      <BidderImageStyled source={image} resizeMode="contain" />
      <View>
        <BidderNameStyled>Bid placed by {name}</BidderNameStyled>
        <BidDateStyled>{date}</BidDateStyled>
      </View>
      <NFTEthPrice price={price} />
    </DetailsBidContainerStyled>
  );
};

export default DetailsBid;
