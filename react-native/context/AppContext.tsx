import * as React from "react";
import { NFT } from "../constants/data";

interface AppContextType {
  nfts: NFT[];
  name: string;
  updateName?: (name: string) => void;
  onLike?: (nftId: string) => void;
  addBid?: (nftId: string, bidPrice: number, isEdit?: boolean) => void;
  onSignOut?: () => void;
}

export const AppContext = React.createContext<AppContextType>({
  nfts: [],
  name: "",
});
