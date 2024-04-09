import buildChatId from "@app/utils/buildChatId";
import { Social } from "alem";

// TODO: a busca deve ser feita tentando as duas direcoes (from-to e to-from)
type Props = {
  from: string;
  to: string;
  message: string;
  onComplete?: () => void;
  onCancel?: () => void;
};
const registerMessage = ({ from, to, message, onComplete, onCancel }: Props) => {
  const chatId = buildChatId(from, to);

  Social.set(
    {
      index: {
        [chatId]: JSON.stringify(
          {
            key: "messageData",
            value: {
              from,
              to,
              message,
              timestamp: Date.now(),
            },
          },
          undefined,
          0,
        ),
      },
    },
    {
      force: true,
      onCommit: onComplete,
      onCancel,
    },
  );
};

export default registerMessage;
