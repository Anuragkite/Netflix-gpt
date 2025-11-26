import Body from "./Components/Body.jsx";
import { Provider } from "react-redux";
import ReduxStore from "./utils/ReduxStore.js";

function App() {
  return (
    <Provider store={ReduxStore}>
      <Body />
    </Provider>
  );
}

export default App;
