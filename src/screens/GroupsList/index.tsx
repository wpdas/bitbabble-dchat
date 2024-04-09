import GroupsProvider from "@app/contexts/GroupsProvider";
import GroupsList from "./GroupsList";

const GroupsListScreen = () => {
  return (
    <GroupsProvider>
      <GroupsList />
    </GroupsProvider>
  );
};

export default GroupsListScreen;
