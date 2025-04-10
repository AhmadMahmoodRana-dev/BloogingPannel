import React from "react";
import darkTheme from "../colors/theme";
const TechBlogMain = ({icon,data,Heading,Para}) => {
  return (
    <div style={{backgroundColor:darkTheme.colors.background}} className="min-h-[40vh] flex flex-col md:flex-row items-center md:items-start justify-between">
      {/* Left Section */}
      <div style={{borderColor:darkTheme.colors.border}} className="flex flex-col items-center md:items-start md:w-[40%] md:border-b  xl:px-16 xl:py-[5.7rem] lg:px-10 lg:py-[2.95rem] md:px-4 md:py-[1.82rem] p-4">
        {/* Logo */}
        <div className="mb-4">
          <img src={icon} alt="" />
        </div>
        <h1 style={{color:darkTheme.colors.textPrimary}} className="text-4xl font-semibold mb-2 md:text-left text-center">{Heading}</h1>
        <p className="text-[#ededed] text-lg md:text-left text-center">
          {Para}
        </p>
      </div>

      {/* Right Section */}
      <div style={{borderColor:darkTheme.colors.border}} className="grid grid-cols-1 sm:grid-cols-2 gap-6  md:w-[60%] md:border-l xl:p-16 lg:p-10 md:p-4 md:border-b p-4">
        {data.map((item, index) => (
          <div
          style={{backgroundColor:darkTheme.colors.cardBackground,borderColor:darkTheme.colors.border}}
            key={index}
            className="p-4 rounded-lg border shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-white text-lg mb-1">{item.title}</h3>
            <p className="text-[#ededed] text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBlogMain;
