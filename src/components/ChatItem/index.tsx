import Avatar from "@components/Avatar";

type Props = {
  name: string;
  onSelectChat?: (chatId: string) => void;
};

const ChatItem = ({ name, onSelectChat }: Props) => {
  return (
    <div className="chat-item">
      <div className="left">
        <Avatar name={name} />
        <p className="text">{name}</p>
      </div>
      <span className="material-symbols-outlined">arrow_forward_ios</span>
    </div>
  );
};

export default ChatItem;
