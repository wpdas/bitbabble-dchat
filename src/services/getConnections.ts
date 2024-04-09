import getFollowers from "./getFollowers";
import getFollowings from "./getFollowings";

/**
 * Return a list of connections (users I follow and they are also following me)
 * @param accountId
 */
const getConnections = (accountId: string) => {
  const followings = getFollowings(accountId);
  const followers = getFollowers(accountId);

  if (!followings || !followers) {
    return null;
  }

  let connections: string[] = [];

  followings?.forEach((followingUser) => {
    if (followers?.includes(followingUser)) {
      connections.push(followingUser);
    }
  });

  return connections;
};

export default getConnections;
