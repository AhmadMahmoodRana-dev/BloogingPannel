import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-[#ededed] min-h-screen h-auto">
      {children}
    </div>
  );
};

export default Layout;
