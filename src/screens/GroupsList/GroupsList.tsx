import useGroups from "@app/hooks/useGroups";
import normalizeRoomName from "@app/utils/normalizeRoomName";
import ChatItem from "@components/ChatItem";
import CenterMessage from "@app/components/CenterMessage";

const GroupsList = () => {
  const { groupsList, ready } = useGroups();

  if (!ready) {
    return <CenterMessage message="Loading..." />;
  }

  return (
    <>
      <div className="contacts-list">
        {groupsList && groupsList.map((group) => <ChatItem name={normalizeRoomName(group.value)} />)}
        {groupsList.length === 0 && ready && <CenterMessage message="No groups found" />}
      </div>
    </>
  );
};

export default GroupsList;
