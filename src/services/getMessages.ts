import { MessageData } from "@app/types";
import buildChatId from "@app/utils/buildChatId";
import { Social, promisify } from "alem";

type Props = {
  accountId: string;
  friendAccountId: string;
  onComplete: (data: MessageData[]) => void;
};

const getMessages = ({ accountId, friendAccountId, onComplete }: Props) => {
  const chatId = buildChatId(accountId, friendAccountId);
  const reverseChatId = buildChatId(friendAccountId, accountId);

  const fetchMessagesA = () => Social.index(chatId, "messageData", { subscribe: true, limit: 1000 });

  const fetchMessagesB = () => Social.index(reverseChatId, "messageData", { subscribe: true, limit: 1000 });

  promisify(fetchMessagesA, (dataA: any) => {
    promisify(fetchMessagesB, (dataB: any) => {
      // Merge
      const mergedData = [...dataA, ...dataB];
      const sorted = mergedData.sort((m1, m2) => m1.blockHeight - m2.blockHeight);
      const mapped = sorted.map((msgData) => ({
        from: msgData.value.from,
        to: msgData.value.to,
        message: msgData.value.message,
        timestamp: msgData.value.timestamp,
      }));
      onComplete(mapped);
    });
  });
};

export default getMessages;
