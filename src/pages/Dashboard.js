import React from "react";

const Dashboard = props => {
  const handleClick = () => {
    props.history.push("/login");
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Dashboard</button>
    </div>
  );
};

export default Dashboard;
