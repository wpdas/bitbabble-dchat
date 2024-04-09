import { Router, createRoute } from "alem";
import routesPath from "./routesPath";
import ContactsList from "./ContactsList";
import GroupsListScreen from "./GroupsList";
import ChatsList from "./ChatsList";
import Chat from "./Chat";

const Routes = () => {
  const routes = [
    createRoute(routesPath.CHATS_LIST, () => <ChatsList />),
    createRoute(routesPath.CONTACTS_LIST, () => <ContactsList />),
    createRoute(routesPath.GROUPS_LIST, () => <GroupsListScreen />),
    createRoute(routesPath.CHAT, () => <Chat />),
  ];

  return <Router routes={routes} type="ContentBased" />;
};

export default Routes;
