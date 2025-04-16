import React from "react";
import Sidebar from "../components/Blog/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full min-h-[92.2vh] h-auto bg-[#ededed] flex">
      <Sidebar />
      <div className="w-full h-full md:ml-[256px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
