import React from "react";
import { SIZES } from "../../constants/theme";
import BidTime from "../BidTime/BidTime";
import NFTCardTitle from "../NFTCardTitle/NFTCardTitle";
import NFTEthPrice from "../NFTEthPrice/NFTEthPrice";
import RectButton from "../RectButton/RectButton";
import {
  NFTCardTextContainerStyled,
  NFTCardPriceCTAContainerStyled,
  BidderStyled,
  BiddedStyled,
} from "./NFTCardContent.styled";
import { View } from "react-native";
import { Bid } from "../../constants/data";
import { hasBidded } from "../../utils/App.utils";
import { AppContext } from "../../context/AppContext";

interface NFTCardContentProps {
  title: string;
  creator: string;
  price: number;
  likes: number;
  bids: Bid[];
  endTime: string;
  onPlaceBid?: () => void;
}

const NFTCardContent: React.FC<NFTCardContentProps> = (
  props: NFTCardContentProps
): React.ReactElement => {
  const { name } = React.useContext(AppContext);
  const { title, creator, price, likes, bids, endTime, onPlaceBid } = props;

  return (
    <>
      <BidTime bids={bids} endTime={endTime} />
      <NFTCardTextContainerStyled>
        <NFTCardTitle
          title={title}
          creator={creator}
          nameSize={SIZES.large}
          creatorSize={SIZES.small}
          likes={likes}
        />
        <NFTCardPriceCTAContainerStyled>
          <View>
            <NFTEthPrice price={price} />
            <BidderStyled>
              {bids.length} bidder{bids.length > 1 && "s"}
              {hasBidded(name, bids) && (
                <BiddedStyled> - You've bidded!</BiddedStyled>
              )}
            </BidderStyled>
          </View>
          <RectButton
            title="View details"
            width={140}
            fontSize={SIZES.font}
            handlePress={onPlaceBid}
          />
        </NFTCardPriceCTAContainerStyled>
      </NFTCardTextContainerStyled>
    </>
  );
};

export default NFTCardContent;
