import { CHAT_LIST_KEY } from "@app/constants";
import { Storage } from "alem";

const cleanUpChatList = () => Storage.set(CHAT_LIST_KEY, []);

export default cleanUpChatList;
