import { useContext } from "react";
import UserContext from "../context/UserContext";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const logOutHandle = () => {
    setUser(null);
  };
  return (
    <>
      <div>Profile:{user.userName}</div>
      <button onClick={logOutHandle}>Logout</button>
    </>
  );
};
