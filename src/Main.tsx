import { useRoutes, context, useMemo } from "alem";
import Routes from "./screens/Routes";
import TopBar from "@components/TopBar";
import BottomBar from "@components/BottomBar";
import routesPath from "./screens/routesPath";
import CenterMessage from "./components/CenterMessage";

const Main = () => {
  const { activeRoute } = useRoutes();
  const accountId = context.accountId;

  const Content = useMemo(
    () => () => accountId ? <Routes /> : <CenterMessage message="You need to Sign in before using this chat." />,
    [accountId, activeRoute],
  );

  return (
    <div className="main-container">
      <div className="top-bar-margin" />
      <TopBar />
      <Content />
      {activeRoute !== routesPath.CHAT && accountId && <BottomBar />}
      <div className="bottom-bar-margin" />
    </div>
  );
};

export default Main;
