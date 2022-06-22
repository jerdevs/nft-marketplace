import { Bid, NFT } from "../constants/data";

export const getNFTDataOnLike = (nftId: string, nftData: NFT[]): NFT[] => {
  const updatedNftData: NFT[] = [];
  nftData.forEach((nft: NFT): void => {
    updatedNftData.push({
      ...nft,
      hasLiked: nft.id === nftId ? !nft.hasLiked : nft.hasLiked,
      likes:
        nft.id === nftId
          ? getUpdatedLikes(nft.likes, !nft.hasLiked)
          : nft.likes,
    });
  });
  return updatedNftData;
};

export const getUpdatedLikes = (likes: number, hasLiked?: boolean): number => {
  return hasLiked ? likes + 1 : likes - 1;
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getBidsOnAdd = (
  bids: Bid[],
  bidPrice: number,
  name: string
): Bid[] => {
  return [...bids, getNewBid(name, bids, bidPrice)];
};

export const getBidsOnEdit = (
  bids: Bid[],
  bidPrice: number,
  name: string
): Bid[] => {
  const updatedBids: Bid[] = [];
  bids.forEach((bid: Bid): any => {
    updatedBids.push({
      ...bid,
      price: bid.name === name ? bidPrice : bid.price,
      date: bid.id === name ? getBidDateTime() : bid.date,
    });
  });
  return updatedBids;
};

const getNewBidId = (bids: Bid[]): string => {
  const ids: number[] = bids.map((bid: Bid): any =>
    parseInt(bid.id.replace("BID-", ""))
  );
  return `BID-${Math.max.apply(Math, ids) + 1}`;
};

export const getNewBid = (name: string, bids: Bid[], bidPrice: number): Bid => {
  const newBid: Bid = {
    id: getNewBidId(bids),
    name,
    price: bidPrice,
    image: require("../assets/images/person01.png"),
    date: getBidDateTime(),
  };
  return newBid;
};

export const hasBidded = (name: string, bids: Bid[]): boolean => {
  return bids.filter((bid: Bid): boolean => bid.name === name).length > 0;
};

const getBidDateTime = (): string => {
  const today = new Date();
  const hours = today.getHours();
  const hour = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  const minutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const period = hours > 12 ? "PM" : "AM";
  return `${
    MONTHS[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()} at ${hour}:${minutes} ${period}`;
};

export const getSortedBidsByPrice = (bids: Bid[]): Bid[] => {
  return bids.sort((bid1: Bid, bid2: Bid): number => bid2.price - bid1.price);
};
