import registerMessage from "@app/services/registerMessage";
import { MessageData } from "@app/types";
import { context, useRoutes, useState } from "alem";

type Props = {
  onSendMessage: (messageData: MessageData) => void;
};

const MessageInput = ({ onSendMessage }: Props) => {
  const [message, setMessage] = useState("");
  const { routeParams } = useRoutes();

  const sendMessageHandler = () => {
    if (routeParams.accountId && context.accountId && message) {
      registerMessage({
        from: context.accountId,
        to: routeParams.accountId,
        message,
        onComplete: () => {
          onSendMessage({
            from: context.accountId!,
            to: routeParams.accountId,
            message,
            timestamp: Date.now(),
          });
          console.log("Message sent!!!");
          setMessage("");
        },
        onCancel: () => {
          console.warn("Message not sent.");
        },
      });
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessageHandler();
          }
        }}
      />
      <div className="buttons">
        {/* <button>
          <span className="material-symbols-outlined">add_photo_alternate</span>
        </button> */}
        <button onClick={sendMessageHandler}>
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
