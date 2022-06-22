import React from "react";
import { FlatList } from "react-native";
import FocusedStatusBar from "../../components/FocusedStatusBar/FocusedStatusBar";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import NFTCard from "../../components/NFTCard/NFTCard";
import { COLORS } from "../../constants/theme";
import { NFT, NFTData } from "../../constants/data";
import { AppContext } from "../../context/AppContext";
import {
  SafeAreaViewStyled,
  HomeContainerStyled,
  NFTContainerStyled,
  HomePageStyled,
  HomeTopPageStyled,
  HomeBottomPageStyled,
  NoNFTsFoundStyled,
} from "./Home.styled";
import { getNFTDataOnLike } from "../../utils/App.utils";
import { useIsFocused } from "@react-navigation/core";

const Home: React.FC = (): React.ReactElement => {
  const { nfts, onLike } = React.useContext(AppContext);
  const [nftData, setNftData] = React.useState<NFT[]>([]);
  const isFocused = useIsFocused();

  React.useEffect((): void => {
    setNftData(nfts);
  }, [isFocused]);

  const handleSearch = (searchValue: string): void => {
    if (!searchValue.length) return setNftData(NFTData);

    const filteredData: NFT[] = NFTData.filter((item: NFT): boolean =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData([]);
    }
  };

  return (
    <SafeAreaViewStyled>
      <FocusedStatusBar background={COLORS.primary} />
      <HomeContainerStyled>
        <NFTContainerStyled>
          <HomeHeader onSearch={handleSearch} />
          {nftData.length ? (
            <FlatList
              data={nftData}
              keyExtractor={(item: NFT): string => item.id}
              renderItem={(result: { item: NFT }): React.ReactElement => {
                return (
                  <NFTCard
                    data={result.item}
                    onLike={(nftId: string): void => {
                      setNftData(getNFTDataOnLike(nftId, nftData));
                      onLike && onLike(nftId);
                    }}
                  />
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <NoNFTsFoundStyled>No NFTs found</NoNFTsFoundStyled>
          )}
        </NFTContainerStyled>
        <HomePageStyled>
          <HomeTopPageStyled />
          <HomeBottomPageStyled />
        </HomePageStyled>
      </HomeContainerStyled>
    </SafeAreaViewStyled>
  );
};

export default Home;
