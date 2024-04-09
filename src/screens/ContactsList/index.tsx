import CenterMessage from "@app/components/CenterMessage";
import ContactItems from "@app/components/ContactItems";
import getFollowings from "@app/services/getFollowings";
import { SimpleProfileInfo } from "@app/types";
import { context, navigate } from "alem";
import routesPath from "../routesPath";

const ContactsList = () => {
  const contacts = getFollowings(context.accountId!);

  const onSelectHandler = (profileInfo: SimpleProfileInfo) => {
    navigate.to(routesPath.CHAT, profileInfo);
  };

  return (
    <div className="contacts-list">
      {!contacts && <CenterMessage message="Loading..." />}
      {contacts && contacts.length === 0 ? (
        <CenterMessage message="No chat has started yet" />
      ) : (
        <ContactItems accountIds={contacts!} onSelect={onSelectHandler} />
      )}
    </div>
  );
};

export default ContactsList;
