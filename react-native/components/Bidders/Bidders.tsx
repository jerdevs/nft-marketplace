import React from "react";
import { ImageSourcePropType } from "react-native";
import { Bid } from "../../constants/data";
import { BidderImageStyled, BiddersContainerStyled } from "./Bidders.styled";

interface BiddersProps {
  bids: Bid[];
}

const Bidders: React.FC<BiddersProps> = (
  props: BiddersProps
): React.ReactElement => {
  const { bids } = props;

  return (
    <BiddersContainerStyled>
      {bids.map((bid: Bid, index: number): React.ReactElement => {
        return (
          <BidderImageStyled
            index={index}
            key={index}
            source={bid.image}
            resizeMode="contain"
          />
        );
      })}
    </BiddersContainerStyled>
  );
};

export default Bidders;
