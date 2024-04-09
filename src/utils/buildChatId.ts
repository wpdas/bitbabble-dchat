import { APP_INDEX_KEY } from "@app/constants";

const buildChatId = (from: string, to: string) => `${APP_INDEX_KEY}--from--${from}--to--${to}`;

export default buildChatId;
