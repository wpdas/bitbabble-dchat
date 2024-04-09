import { createContext, useContext } from "alem";
import getGroupsList from "@services/getGroupsList";
import { Group, GroupsContextProps } from "@app/types";

// Context
const GroupsContext = () => {
  const { setDefaultData, updateData, getSelf } = createContext<GroupsContextProps>("groups-context");

  setDefaultData({
    groupsList: [],
    ready: false,

    updateGroupsList: (updatedGroupsList?: Group[]) => {
      if (!updatedGroupsList) return;

      updateData({
        groupsList: updatedGroupsList,
        ready: true,
      });
    },
  });

  // Auto start
  const self = getSelf();
  if (!self.ready) {
    const groupsList = getGroupsList();
    if (groupsList) {
      self.updateGroupsList(groupsList);
    }
  }
};

// Provider
type GroupsProviderProps = {
  children: JSX.Element | JSX.Element[];
};
const GroupsProvider = ({ children }: GroupsProviderProps) => {
  GroupsContext();

  return <>{children}</>;
};

export default GroupsProvider;
