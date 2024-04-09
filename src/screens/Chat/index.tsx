import { context, useEffect, useRoutes, useState } from "alem";
import Message from "@app/components/Message";
import MessageInput from "@app/components/MessageInput";
import getMessages from "@app/services/getMessages";
import { MessageData } from "@app/types";
import updateChatList from "@app/services/updateChatList";

const Chat = () => {
  const { routeParams } = useRoutes();
  const [messages, setMessages] = useState<MessageData[]>([]);

  useEffect(() => {
    const fetchMessages = () => {
      getMessages({
        accountId: context.accountId!,
        friendAccountId: routeParams.accountId,
        onComplete: (data) => {
          if (data.length >= messages.length) {
            setMessages(data);
          }

          // Store this friend as a open chat
          updateChatList(routeParams.accountId);
        },
      });
    };

    // Listen to messages
    const subscription = setInterval(() => {
      fetchMessages();
    }, 5000);

    fetchMessages();

    const kill = () => {
      clearInterval(subscription);
    };

    return kill;

    // TODO: Bug: isso quebra
    // return () => {
    //   clearInterval(subscription);
    // };
  }, [messages]);

  const onSendMessage = (messageData: MessageData) => {
    // Update the list of messages to show the new one that was just sent
    const updatedMessages = [...messages, messageData];
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((messageData) => (
          <Message messageData={messageData} />
        ))}
      </div>
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default Chat;
