import React from "react";
import Tooltip from "../templates/Tooltip";

const Dashboard = () => (
  <div style={{ marginTop: "50px" }}>
    <Tooltip content="this is a dashboard">
      <button>Dashboard</button>
    </Tooltip>
  </div>
);

export default Dashboard;
