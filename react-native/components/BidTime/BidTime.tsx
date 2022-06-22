import React from "react";
import { NFTCardContentContainerStyled } from "./BidTime.styled";
import Bidders from "../Bidders/Bidders";
import EndDate from "../EndDate/EndDate";
import { Bid } from "../../constants/data";

interface BidTimeProps {
  bids: Bid[];
  endTime: string;
}

const BidTime: React.FC<BidTimeProps> = (
  props: BidTimeProps
): React.ReactElement => {
  const { bids, endTime } = props;

  return (
    <NFTCardContentContainerStyled>
      <Bidders bids={bids} />
      <EndDate endTime={endTime} />
    </NFTCardContentContainerStyled>
  );
};

export default BidTime;
