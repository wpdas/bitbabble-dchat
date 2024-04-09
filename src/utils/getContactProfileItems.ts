import getProfileInfo from "@app/services/getProfileInfo";
import truncate from "./truncate";
import { Storage, promisify } from "alem";
import getProfileImage from "./getProfileImage";

const processContactProfileItems = (
  accountIds: string[],
  onComplete: (items: { accountId: string; name: string; profileImage: string }[]) => void,
) => {
  if (!accountIds || !onComplete) return;

  let _items: { accountId: string; name: string; profileImage: string }[] = [];

  accountIds.forEach((accountId) => {
    const profileInfo = getProfileInfo(accountId);
    if (profileInfo.name) {
      let name = truncate(profileInfo.name, 22);

      // Try cached image first
      promisify(
        () => Storage.privateGet(`${accountId}-profile-image`),
        (image) => {
          if (image) {
            let profileImage = image;
            _items.push({ accountId, name, profileImage });
            onComplete(_items);
          }
        },
        () => {
          // Process a new image
          getProfileImage(profileInfo.image, (image) => {
            Storage.privateSet(`${accountId}-profile-image`, image);
            let profileImage = image;
            _items.push({ accountId, name, profileImage });
            onComplete(_items);
          });
        },
        300,
      );
    }
  });
};

const getContactProfileItems = (
  accountIds: string[],
  onComplete: (items: { accountId: string; name: string; profileImage: string }[]) => void,
) => {
  promisify(
    () => processContactProfileItems(accountIds, onComplete),
    () => {},
  );
};

export default getContactProfileItems;
