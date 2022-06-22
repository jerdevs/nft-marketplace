import * as React from "react";
import { NFT } from "../constants/data";

interface AppContextType {
  nfts: NFT[];
  name: string;
  onLike?: (nftId: string) => void;
  onLogin?: (name: string) => void;
  addBid?: (nftId: string, bidPrice: number, isEdit?: boolean) => void;
}

export const AppContext = React.createContext<AppContextType>({
  nfts: [],
  name: "",
});
