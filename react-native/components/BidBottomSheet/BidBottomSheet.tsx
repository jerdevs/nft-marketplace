import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { SIZES, ShadowType } from "../../constants/theme";
import RectButton from "../RectButton/RectButton";
import {
  BidBottomSheetContainerStyled,
  ButtonStyled,
  EthIconStyled,
  BidContainerStyled,
  EthTextStyled,
  BidInputStyled,
  YourBidStyled,
} from "./BidBottomSheet.styled";

interface BidBottomSheetProps {
  price: number;
  hasBidded?: boolean;
  onBid?: (bidPrice: number, isEdit?: boolean) => void;
}

const BidBottomSheet: React.FC<BidBottomSheetProps> = (
  props: BidBottomSheetProps
): React.ReactElement => {
  const refRBSheet = React.useRef<RBSheet | null>(null);
  const { price, hasBidded, onBid } = props;
  const [bid, setBid] = React.useState(price.toString());

  const onClose = (): void => refRBSheet.current?.close();

  return (
    <>
      <ButtonStyled>
        <RectButton
          title={hasBidded ? "Edit bid" : "Place a bid"}
          width={200}
          fontSize={SIZES.large}
          shadow={ShadowType.DARK}
          handlePress={(): void => {
            refRBSheet.current?.open();
          }}
        />
      </ButtonStyled>
      <RBSheet ref={refRBSheet} height={250} closeOnDragDown closeOnPressMask>
        <BidBottomSheetContainerStyled>
          <YourBidStyled>Your bid</YourBidStyled>
          <BidContainerStyled>
            <BidInputStyled
              onChangeText={(value: string): void => {
                setBid(value ? value : "");
              }}
              value={bid}
              keyboardType="decimal-pad"
            />
            <EthIconStyled
              source={require("../../assets/icons/eth.png")}
              resizeMode="contain"
            />
            <EthTextStyled>ETH</EthTextStyled>
          </BidContainerStyled>
          <RectButton
            title="Bid"
            width={100}
            fontSize={SIZES.font}
            handlePress={(): void => {
              onClose();
              onBid && onBid(parseFloat(bid), hasBidded);
            }}
            disabled={!bid}
          />
        </BidBottomSheetContainerStyled>
      </RBSheet>
    </>
  );
};

export default BidBottomSheet;
