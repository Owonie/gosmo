export interface NFTObjekt {
  contract: {
    address: string;
  };
  id: {
    tokenId: string;
    tokenMetadata: {
      tokenType: string;
    };
  };
  balance: string;
  acquiredAt: {
    blockTimestamp: string;
    blockNumber: number;
  };
  title: string;
  description: string;
  tokenUri: {
    gateway: string;
    raw: string;
  };
  media: {
    gateway: string;
    thumbnail: string;
    raw: string;
    format: string;
    bytes: number;
  }[];
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes: {
      value: string;
      trait_type: string;
    }[];
    background_color: string;
    objekt: {
      backgroundColor: string;
      comoAmount: number;
      frontImage: string;
      tokenId: string;
      accentColor: string;
      transferable: boolean;
      textColor: string;
      backImage: string;
      tokenAddress: string;
      objektNo: number;
      artists: string[];
      member: string;
      season: string;
      collectionNo: string;
      thumbnailImage: string;
      collectionId: string;
      class: string;
      transferableByDefault: boolean;
    };
  };
  timeLastUpdated: string;
  contractMetadata: {
    name: string;
    symbol: string;
    totalSupply: string;
    tokenType: string;
    contractDeployer: string;
    deployedBlockNumber: number;
    openSea: {
      lastIngestedAt: string;
    };
  };
}

export interface CollectionData {
  ownedNfts: NFTObjekt[];
}
