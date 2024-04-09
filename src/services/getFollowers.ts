import { Social } from "alem";

const getFollowers = (accountId: string) => {
  const followers = Social.keys(`*/graph/follow/${accountId}`, "final", {
    return_type: "BlockHeight",
    values_only: true,
  });

  if (followers) {
    return Object.keys(followers);
  }

  return null;
};

export default getFollowers;
