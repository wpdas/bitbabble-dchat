import routesPath from "@app/screens/routesPath";
import Avatar from "../Avatar";
import { navigate, useRoutes } from "alem";

const TopBar = () => {
  const { routeParams, activeRoute } = useRoutes();

  const onClickBackHandler = () => {
    navigate.back();
  };

  if (routeParams.name && activeRoute === routesPath.CHAT) {
    return (
      <div className="topbar left">
        <button onClick={onClickBackHandler}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <Avatar image={routeParams.profileImage} />
        <h3 className="topbar-title">{routeParams.name}</h3>
      </div>
    );
  }

  return (
    <div className="topbar">
      <h3 className="topbar-title">BitBabble</h3>
    </div>
  );
};

export default TopBar;
