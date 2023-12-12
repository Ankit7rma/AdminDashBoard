import { useContext } from "react";
import UserContext from "../context/UserContext";
import GenderPieChart from "./MFPieChart";
import EmploymentTypePieChart from "./EPieChart";
import "./Style.css";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const logOutHandle = () => {
    setUser(null);
  };
  return (
    <>
      <header className="header">
        <h1>Logo</h1>
        <div style={{ display: "flex", margin: "5px" }}>
          <h1 style={{ margin: "5px" }}>{user.userName}</h1>
          <button
            style={{ padding: "1px", height: "28px", margin: "5px" }}
            onClick={logOutHandle}
          >
            Logout
          </button>
        </div>
      </header>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "250px",
            border: "1px solid",
            display: "flex",
            justifyContent: "center",
            background: "yellow",
          }}
        >
          <div
            style={{
              height: "60px",
              marginTop: "50px",
              marginLeft: "100px",
              width: "100%",
              fontSize: "24px",
            }}
          >
            Dashboard
          </div>
        </div>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            width: "full",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ marginTop: "-600px" }}>Key Performance Indicators</h3>
          <div style={{ margin: "50px" }}>
            <GenderPieChart />
          </div>
          <div style={{ margin: "50px" }}>
            <EmploymentTypePieChart />
          </div>
        </div>
      </div>
    </>
  );
};
