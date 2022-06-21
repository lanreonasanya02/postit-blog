import React from "react";
import { Outlet } from "react-router-dom";
import DashNav from "./DashNav";

const Dashboard = () => {
  return (
    <div>
      <DashNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
