import UserContextProvider from "./context/UserContextProvider";
import "./index.css";
import Body from "./Body";

function App() {
  return (
    <UserContextProvider>
      <Body />
    </UserContextProvider>
  );
}

export default App;
