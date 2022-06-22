import React from "react";
import {
  NFTCardPriceContainerStyled,
  NFTCardPriceImageStyled,
  NFTCardPriceStyled,
} from "./NFTEthPrice.styled";

interface NFTEthPriceProps {
  price: number;
}

const NFTEthPrice: React.FC<NFTEthPriceProps> = (
  props: NFTEthPriceProps
): React.ReactElement => {
  const { price } = props;

  return (
    <NFTCardPriceContainerStyled>
      <NFTCardPriceImageStyled
        source={require("../../assets/icons/eth.png")}
        resizeMode="contain"
      />
      <NFTCardPriceStyled>{price}</NFTCardPriceStyled>
    </NFTCardPriceContainerStyled>
  );
};

export default NFTEthPrice;
