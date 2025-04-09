import React from "react";
import darkTheme from "../colors/theme";
import latest1 from "../assets/latest1.png";
import latest2 from "../assets/latest2.png";
import latest3 from "../assets/latest3.png";
import { MdArrowOutward } from "react-icons/md";

const LatestNew = () => {
  return (
    <div
      style={{ backgroundColor: darkTheme.colors.background }}
      className="w-full min-h-[30vh] h-auto grid md:grid-cols-3 grid-cols-1"
    >
      {/* First */}
      <div
        style={{ borderColor: darkTheme.colors.border }}
        className="border border-l-0 flex justify-center items-center"
      >
        <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] w-[90%] py-8 md:py-0">
        <img src={latest1} />
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 style={{color:darkTheme.colors.textPrimary}} className="lg:text-xl md:text-lg text-xl">Latest News Updates</h1>
              <h1 style={{color:darkTheme.colors.textSecondary}} className="lg:text-md">Stay Currents</h1>
            </div>
            <button className="bg-yellow-400 lg:p-4 md:p-2 p-4 text-lg rounded-full lg:text-2xl md:text-xl"><MdArrowOutward/></button>
          </div>
          <h1 style={{color:darkTheme.colors.textSecondary}} className="lg:text-md">Over 1,000 articles published monthly</h1>
        </div>
      </div>
      {/* Second */}
      <div
        style={{ borderColor: darkTheme.colors.border }}
        className="border flex justify-center items-center"
      >
        <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] w-[90%] py-8 md:py-0">
        <img src={latest2} />
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 style={{color:darkTheme.colors.textPrimary}} className="lg:text-xl md:text-lg text-xl">Expert Contributors</h1>
              <h1 style={{color:darkTheme.colors.textSecondary}} className="lg:text-md">Trusted Insights</h1>
            </div>
            <button className="bg-yellow-400 lg:p-4 md:p-2 p-4 text-lg rounded-full lg:text-2xl md:text-xl"><MdArrowOutward/></button>
          </div>
          <h1 style={{color:darkTheme.colors.textSecondary}} className="lg:text-md">50+ renowned AI experts on our team</h1>
        </div>
      </div>
      {/* Third */}
      <div
        style={{ borderColor: darkTheme.colors.border }}
        className="border border-r-0 flex justify-center items-center"
      >
        <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] w-[90%] py-8 md:py-0">
        <img src={latest3} />
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 style={{color:darkTheme.colors.textPrimary}} className="lg:text-xl md:text-lg text-xl">Global Readership</h1>
              <h1 style={{color:darkTheme.colors.textSecondary}} className="lg:text-md">Worldwide Impact</h1>
            </div>
            <button className="bg-yellow-400 lg:p-4 md:p-2 p-4 text-lg rounded-full lg:text-2xl md:text-xl"><MdArrowOutward/></button>
          </div>
          <h1 style={{color:darkTheme.colors.textSecondary}} className="lg:text-md">2 million monthly readers</h1>
        </div>
      </div>
    </div>
  );
};

export default LatestNew;
