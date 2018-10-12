import React from "react";
import { getMasterCity } from "../api";

const Dashboard = () => {
  const handleClick = async () => {
    const { data, error } = await getMasterCity();
    console.log(data);
    console.log(error);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Dashboard</button>
    </div>
  );
};

export default Dashboard;
