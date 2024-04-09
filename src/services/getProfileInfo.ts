import { NEARSocialUserProfile } from "@app/types";
import { Social } from "alem";

const getProfileInfo = (accountId: string) => {
  const profileInfo: NEARSocialUserProfile = Social.get(`${accountId}/profile/**`);
  return profileInfo;
};

export default getProfileInfo;
