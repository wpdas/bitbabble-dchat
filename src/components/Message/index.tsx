import timeAgo from "@app/modules/TimeAgo/timeAgo";
import { MessageData } from "@app/types";
import { context, useEffect, useModule, useState } from "alem";

type Props = {
  messageData: MessageData;
};

const Message = ({ messageData }: Props) => {
  const itsMe = messageData.from === context.accountId;
  const [timeText, setTimeText] = useState("...");

  // Process the timestamp
  useEffect(() => {
    if (messageData.timestamp) {
      useModule(
        timeAgo.formatTimestamp(messageData.timestamp, (text) => {
          setTimeText(text);
        }),
      );
    }
  }, [messageData.timestamp]);

  if (itsMe) {
    return (
      <div className="message-right">
        <div className="text-container">
          <p className="its-me">{messageData.message}</p>
          {timeText && <p className="time">{timeText}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="message-left">
      <div className="text-container">
        <p className="its-not-me">{messageData.message}</p>
        {timeText && <p className="time">{timeText}</p>}
      </div>
    </div>
  );
};

export default Message;
