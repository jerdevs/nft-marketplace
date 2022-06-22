import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { FlatList } from "react-native";
import { RootStackParamList } from "../../App";
import BidTime from "../../components/BidTime/BidTime";
import DetailsBid from "../../components/DetailsBid/DetailsBid";
import DetailsDescription from "../../components/DetailsDescription/DetailsDescription";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";
import FocusedStatusBar from "../../components/FocusedStatusBar/FocusedStatusBar";
import { SIZES } from "../../constants/theme";
import { Bid, NFT } from "../../constants/data";
import {
  SafeAreaViewStyled,
  DetailsDescriptionStyled,
  CurrentBidsTextStyled,
} from "./Details.styled";
import { AppContext } from "../../context/AppContext";
import {
  getBidsOnAdd,
  getBidsOnEdit,
  getSortedBidsByPrice,
  getUpdatedLikes,
  hasBidded,
} from "../../utils/App.utils";
import BidBottomSheet from "../../components/BidBottomSheet/BidBottomSheet";

const Details: React.FC = (): React.ReactElement => {
  const { name, onLike, addBid } = React.useContext(AppContext);
  const {
    params: { data },
  } = useRoute<RouteProp<RootStackParamList, "Details">>();
  const [nft, setNft] = React.useState<NFT>(data);
  const navigate = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaViewStyled>
      <FocusedStatusBar
        barStyle="dark-content"
        background="transparent"
        translucent
      />
      <BidBottomSheet
        price={nft.price}
        hasBidded={hasBidded(name, nft.bids)}
        onBid={(bidPrice: number, isEdit?: boolean): void => {
          addBid && addBid(data.id, bidPrice, isEdit);
          setNft({
            ...nft,
            bids: isEdit
              ? getBidsOnEdit(nft.bids, bidPrice, name)
              : getBidsOnAdd(nft.bids, bidPrice, name),
          });
        }}
      />
      <FlatList
        data={getSortedBidsByPrice(nft.bids)}
        keyExtractor={(item: Bid): string => item.id}
        renderItem={(result: { item: Bid }): React.ReactElement => {
          return <DetailsBid bid={result.item} />;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={(): React.ReactElement => {
          return (
            <>
              <DetailsHeader
                data={nft}
                goBack={() => navigate.goBack()}
                onLike={(nftId: string): void => {
                  setNft({
                    ...nft,
                    hasLiked: !nft.hasLiked,
                    likes: getUpdatedLikes(nft.likes, !nft.hasLiked),
                  });
                  onLike && onLike(nftId);
                }}
              />
              <BidTime bids={nft.bids} endTime={nft.endTime} />
              <DetailsDescriptionStyled>
                <DetailsDescription data={nft} />
                {!!nft.bids.length && (
                  <CurrentBidsTextStyled>Current Bids</CurrentBidsTextStyled>
                )}
              </DetailsDescriptionStyled>
            </>
          );
        }}
      />
    </SafeAreaViewStyled>
  );
};

export default Details;
