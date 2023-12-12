import { useContext } from "react";
import UserContext from "./context/UserContext";
import { Dashboard } from "./components/Dashboard";
import Login from "./components/Login";

function Body() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div>{user ? <Dashboard /> : <Login />}</div>
    </div>
  );
}

export default Body;
