import React, { useContext } from "react";
import UserContext from "./context/UserContext";
import { Dashboard } from "./components/Dashboard";
import Login from "./components/Login";

function Body() {
  const { user } = useContext(UserContext);
  return <div>{user ? <Dashboard /> : <Login />}</div>;
}

export default Body;
