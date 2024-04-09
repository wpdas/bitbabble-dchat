import { Social } from "alem";

const getFollowings = (accountId: string) => {
  const following: Record<string, any> = Social.keys(`${accountId}/graph/follow/*`, "final", {
    return_type: "BlockHeight",
    values_only: true,
  });

  if (following) {
    return Object.keys(following[accountId].graph.follow);
  }

  return null;
};

export default getFollowings;
