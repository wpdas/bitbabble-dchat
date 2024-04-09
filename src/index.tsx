import { ModulesProvider, RouterContext, context, loadExternalStyles, useEffect } from "alem";
import Main from "./Main";
import Spinner from "./components/Spinner/Spinner";
import cleanUpChatList from "./services/cleanUpChatList";

const App = () => {
  const ready = loadExternalStyles([
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
  ]);

  RouterContext();

  useEffect(() => {
    // clean up storage
    if (!context.accountId) {
      console.log("Shoud i go?");
      cleanUpChatList();
    }
  }, [context.accountId]);

  return (
    <div className="App">
      <ModulesProvider />
      {ready ? <Main /> : <Spinner />}
      <div className="App-bg" />
    </div>
  );
};

export default App;
