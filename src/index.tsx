import { ModulesProvider, RouterContext, loadExternalStyles } from "alem";
import Main from "./Main";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
  const ready = loadExternalStyles([
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
  ]);

  RouterContext();

  return (
    <div className="App">
      <ModulesProvider />
      {ready ? <Main /> : <Spinner />}
      <div className="App-bg" />
    </div>
  );
};

export default App;
