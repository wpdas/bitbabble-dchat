import { isDevelopment } from "alem";

export const APP_INDEX_KEY = isDevelopment ? "bitbabble-dev-0" : "bitbabble-prod-0";
export const CHAT_LIST_KEY = isDevelopment ? "chatlist-dev-0" : "chatlist-prod-0";
