import * as React from "react";
import { Bid, NFT, NFTData } from "../constants/data";
import { AppContext } from "../context/AppContext";
import {
  getBidsOnAdd,
  getBidsOnEdit,
  getNewBid,
  getNFTDataOnLike,
  MONTHS,
} from "../utils/App.utils";

export interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = (props: AppProviderProps) => {
  const { children } = props;
  const [nfts, setNfts] = React.useState<NFT[]>(NFTData);
  const [name, setName] = React.useState("");

  const onLike = (nftId: string): void => {
    setNfts(getNFTDataOnLike(nftId, nfts));
  };

  const onLogin = (updatedName: string): void => setName(updatedName);

  const addBid = (nftId: string, bidPrice: number, isEdit?: boolean): void => {
    const updatedNfts: NFT[] = [];
    nfts.forEach((eachNft: NFT): void => {
      if (eachNft.id === nftId) {
        updatedNfts.push({
          ...eachNft,
          bids: isEdit
            ? getBidsOnEdit(eachNft.bids, bidPrice, name)
            : getBidsOnAdd(eachNft.bids, bidPrice, name),
        });
      } else {
        updatedNfts.push(eachNft);
      }
    });
    setNfts(updatedNfts);
  };

  return (
    <AppContext.Provider
      value={{
        nfts,
        name,
        onLike,
        onLogin,
        addBid,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
