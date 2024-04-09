import CenterMessage from "@app/components/CenterMessage";
import ContactItems from "@app/components/ContactItems";
import getChatList from "@app/services/getChatList";
import { SimpleProfileInfo } from "@app/types";
import { navigate } from "alem";
import routesPath from "../routesPath";

const ChatsList = () => {
  const chats = getChatList();

  const onSelect = (profileInfo: SimpleProfileInfo) => {
    navigate.to(routesPath.CHAT, profileInfo);
  };

  if (!chats) {
    <CenterMessage message="Loading..." />;
  }

  return (
    <div className="contacts-list">
      {!chats.length ? (
        <CenterMessage message="No chat has started yet" />
      ) : (
        <ContactItems accountIds={chats} onSelect={onSelect} />
      )}
    </div>
  );
};

export default ChatsList;
