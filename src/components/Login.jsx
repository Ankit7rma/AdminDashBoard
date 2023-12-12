import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import "./Style.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default Login;
