// TODO: colocar no alem? Talvez em plugins? Criar um gerenciador ou repositorio de plugins?

import getNftImage from "@app/services/getNftImage";

/**
 * Returns the image based on profile image props (image, ipfs_cid, nft)
 * Original source: https://near.org/near/widget/ComponentDetailsPage?src=mob.near/widget/Image
 * @param imageProp
 */
const getProfileImage = (imageProp: any, onComplete: (image: string) => void) => {
  if (!onComplete) return;

  function toUrl(image: any) {
    return image.ipfs_cid ? `https://ipfs.near.social/ipfs/${image.ipfs_cid}` : image.url;
  }

  if (imageProp.nft.contractId && imageProp.nft.tokenId) {
    return getNftImage(imageProp.nft, onComplete);
  }

  onComplete(toUrl(imageProp));
};

export default getProfileImage;
