import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-[#ededed] pb-20 min-h-screen h-auto">
      {children}
    </div>
  );
};

export default Layout;
