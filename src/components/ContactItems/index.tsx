import getContactProfileItems from "@app/utils/getContactProfileItems";
import Avatar from "@components/Avatar";
import { useMemo, useState } from "alem";
import CenterMessage from "../CenterMessage";
import { SimpleProfileInfo } from "@app/types";

type Props = {
  accountIds: string[];
  onSelect?: (profileInfo: SimpleProfileInfo) => void;
};

const ContactItems = ({ accountIds, onSelect }: Props) => {
  const [items, setItems] = useState<SimpleProfileInfo[]>([]);
  const [ready, setReady] = useState(false);

  useMemo(() => {
    getContactProfileItems(accountIds, (items) => {
      const alphabeticallySortedItems = items.sort((a, b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        return 0;
      });
      setItems(alphabeticallySortedItems);
      setReady(true);
    });
  }, [accountIds]);

  if (!ready) {
    <CenterMessage message="Loading..." />;
  }

  if (items.length === 0 && ready) {
    return <CenterMessage message="No contacts found. Your contacts are based on the people you follow." />;
  }

  const contentItems = items.map((item) => (
    <div className="chat-item" onClick={() => onSelect && onSelect(item)}>
      <div className="left">
        <Avatar name={item.name} image={item.profileImage} />
        <p className="text">{item.name}</p>
      </div>
      <span className="material-symbols-outlined">add_comment</span>
    </div>
  ));

  return <>{contentItems}</>;
};

export default ContactItems;
