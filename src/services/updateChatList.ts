import { CHAT_LIST_KEY } from "@app/constants";
import { Storage } from "alem";
import getChatList from "./getChatList";

/**
 * Registra que tenho um chat em aberto com tal contato
 * @param param0
 */
const updateChatList = (friendAccountId: string) => {
  getChatList((previousChatList) => {
    const updatedChatList = [...(previousChatList || []), friendAccountId];
    // Remove possible duplicates
    const filtered = updatedChatList.filter((item, itemIndex) => updatedChatList.indexOf(item) === itemIndex);
    Storage.set(CHAT_LIST_KEY, filtered);
  });
};

export default updateChatList;
