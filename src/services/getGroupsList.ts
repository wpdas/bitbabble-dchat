import { Social } from "alem";
import { APP_INDEX_KEY } from "@app/constants";
import { Group } from "@app/types";

const getGroupsList = () => {
  const data = Social.index<Group[]>(APP_INDEX_KEY, "room", {
    limit: 1000,
    order: "desc",
  });

  if (!data) return null;

  const sorted = data.sort((m1, m2) => m1.blockHeight - m2.blockHeight);
  return sorted;
};

export default getGroupsList;
