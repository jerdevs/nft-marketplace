import * as React from "react";
import { NFT, NFTData } from "../constants/data";
import { AppContext } from "../context/AppContext";
import {
  getBidsOnAdd,
  getBidsOnEdit,
  getNFTDataOnLike,
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

  const updateName = (updatedName: string): void => setName(updatedName);

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

  const onSignOut = (): void => {
    setNfts(NFTData);
    setName("");
  };

  return (
    <AppContext.Provider
      value={{
        nfts,
        name,
        onLike,
        updateName,
        addBid,
        onSignOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
