import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <h2>Welcome to Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Dashboard;