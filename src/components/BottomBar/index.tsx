import routesPath from "@app/screens/routesPath";
import { navigate, useRoutes } from "alem";

const BottomBar = () => {
  const routes = useRoutes();

  // Items
  const Items = ({
    children,
    name,
    to,
    active,
  }: {
    children: JSX.Element;
    name: string;
    to: string;
    active?: boolean;
  }) => {
    const onClick = () => {
      navigate.to(to, { previous: routes.activeRoute });
    };

    return (
      <button className={`item ${active ? "active" : ""}`} onClick={onClick}>
        {children}
        <p className="item-text">{name}</p>
      </button>
    );
  };

  return (
    <div className="bottombar">
      <Items name="Chats" to={routesPath.CHATS_LIST} active={routes.activeRoute === routesPath.CHATS_LIST}>
        <span className="material-symbols-outlined">forum</span>
      </Items>
      {/* <Items name="Groups" to={routesPath.GROUPS_LIST} active={routes.activeRoute === routesPath.GROUPS_LIST}>
        <span className="material-symbols-outlined">group</span>
      </Items> */}
      <Items name="Contacts" to={routesPath.CONTACTS_LIST} active={routes.activeRoute === routesPath.CONTACTS_LIST}>
        <span className="material-symbols-outlined">list_alt</span>
      </Items>
    </div>
  );
};

export default BottomBar;
