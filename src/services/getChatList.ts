import { CHAT_LIST_KEY } from "@app/constants";
import { Storage, isDevelopment, promisify } from "alem";

const getChatList = (onComplete?: (data: string[]) => void) => {
  const fetchChatList = () => Storage.get(CHAT_LIST_KEY);

  const _onComplete = (data: string[]) => {
    if (onComplete) {
      onComplete(data);
    }
  };

  // Async
  promisify(fetchChatList, _onComplete, () => _onComplete([]), 300);

  // Sync
  return fetchChatList();
};

export default getChatList;
