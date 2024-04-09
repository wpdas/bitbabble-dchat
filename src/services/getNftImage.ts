// Original source: https://near.org/near/widget/ComponentDetailsPage?src=mob.near/widget/NftImage

import { Near, fetch, promisify } from "alem";

// TODO: colocar no alem? Talvez em plugins? Criar um gerenciador ou repositorio de plugins?
const getNftImage = (nft: { contractId: string; tokenId: string }, onComplete: (image: string) => void) => {
  if (!nft.contractId || !nft.tokenId) return null;

  const processImage = (nftMetadata: any, tokenMetadata: any) => {
    let finalImageUrl: any = null;

    if (nftMetadata && tokenMetadata) {
      let tokenMedia = tokenMetadata.media || "";

      finalImageUrl =
        tokenMedia.startsWith("https://") || tokenMedia.startsWith("http://") || tokenMedia.startsWith("data:image")
          ? tokenMedia
          : nftMetadata.base_uri
          ? `${nftMetadata.base_uri}/${tokenMedia}`
          : tokenMedia.startsWith("Qm") || tokenMedia.startsWith("ba")
          ? `https://ipfs.near.social/ipfs/${tokenMedia}`
          : tokenMedia;

      if (!tokenMedia && tokenMetadata.reference) {
        if (nftMetadata.base_uri === "https://arweave.net" && !tokenMetadata.reference.startsWith("https://")) {
          const res = fetch(`${nftMetadata.base_uri}/${tokenMetadata.reference}`);
          finalImageUrl = res.body.media;
        } else if (tokenMetadata.reference.startsWith("https://") || tokenMetadata.reference.startsWith("http://")) {
          const res = fetch(tokenMetadata.reference);
          finalImageUrl = JSON.parse(res.body).media;
        } else if (tokenMetadata.reference.startsWith("ar://")) {
          const res = fetch(`${"https://arweave.net"}/${tokenMetadata.reference.split("//")[1]}`);
          finalImageUrl = JSON.parse(res.body).media;
        }
      }

      if (!finalImageUrl) {
        finalImageUrl = false;
      }
    }

    // const rex =
    //   /^(?:https?:\/\/)(?:[^\/]+\/ipfs\/)?(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(?:\.[^\/]+)?(\/.*)?$/g;
    // rex.lastIndex = 0;

    // const replaceIpfs = (imageUrl: string) => {
    //   const match = rex.exec(imageUrl);
    //   if (match) {
    //     const newImageUrl = `https://ipfs.near.social/ipfs/${match[1]}${match[2] || ""}`;
    //     if (newImageUrl !== imageUrl) {
    //       finalImageUrl = newImageUrl;
    //       return;
    //     }
    //   }

    //   if (finalImageUrl !== false) {
    //     finalImageUrl = false;
    //   }
    // };

    if (onComplete) {
      onComplete(finalImageUrl);
    }
  };

  const getTokenMetadata = (nftMetadata: any) => {
    promisify(
      () =>
        Near.view<any>(nft.contractId, "nft_token", {
          token_id: nft.tokenId,
        }).metadata,
      (tokenMetadata) => {
        processImage(nftMetadata, tokenMetadata);
      },
    );
  };

  const getNftMetadata = () => {
    promisify(
      () => Near.view<any>(nft.contractId, "nft_metadata"),
      (nftMetadata) => {
        getTokenMetadata(nftMetadata);
      },
    );
  };

  getNftMetadata();
};

export default getNftImage;
