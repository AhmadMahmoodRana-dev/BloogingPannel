import React from "react";
import darkTheme from "../colors/theme";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#141414" }}
      className="text-white min-h-[73vh] flex md:flex-nowrap flex-wrap"
    >
      {/* Left Section */}
      <div className=" md:w-[70%] md:min-h-[73vh] md:mt-8 lg:mt-0">
        <div className="lg:px-16 md:py-20 py-10 px-5 md:px-8">
          <p
            style={{ color: darkTheme.colors.textSecondary }}
            className="mb-2 text-lg"
          >
            Your Journey to Tomorrow Begins Here
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Explore the Frontiers of <br className="hidden sm:block" />
            Artificial Intelligence
          </h1>
          <p
            style={{ color: darkTheme.colors.textSecondary }}
            className="mt-4 md:mt-6 max-w-2xl"
          >
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </p>
        </div>
        {/* Bottom Card */}
        <div className="main-bottom-container grid grid-cols-3">
          <div
            style={{ borderColor: darkTheme.colors.border }}
            className="border md:h-[150px] h-[100px] flex flex-col justify-center items-center"
          >
            <h1 className="lg:text-3xl md:text-2xl font-semibold">
              300<span className="text-yellow-400">+</span>
            </h1>
            <p
              style={{ color: darkTheme.colors.textSecondary }}
              className="lg:text-lg  text-center md:text-md text-xs"
            >
              Resource Available
            </p>
          </div>
          <div
            style={{ borderColor: darkTheme.colors.border }}
            className="border md:h-[150px] h-[100px] flex flex-col justify-center items-center"
          >
            <h1 className="lg:text-3xl md:text-2xl font-semibold">
              12k<span className="text-yellow-400">+</span>
            </h1>
            <p
              style={{ color: darkTheme.colors.textSecondary }}
              className="lg:text-lg text-center md:text-md text-xs"
            >
              Total Downloads
            </p>
          </div>
          <div
            style={{ borderColor: darkTheme.colors.border }}
            className="border md:h-[150px] h-[100px] flex flex-col justify-center items-center"
          >
            <h1 className="lg:text-3xl md:text-2xl font-semibold">
              10k<span className="text-yellow-400">+</span>
            </h1>
            <p
              style={{ color: darkTheme.colors.textSecondary }}
              className="lg:text-lg text-center md:text-md text-xs"
            >
              Active Users
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        style={{ borderColor: darkTheme.colors.border }}
        className="md:w-[30%] md:min-h-[73vh] min-h-[50vh] flex flex-col border-l items-center justify-end relative"
      >
        <div className="relative p-6 rounded-lg shadow-xl">
          <div
            style={{ backgroundColor: darkTheme.colors.cardBackground }}
            className="flex -space-x-3 overflow-hidden items-center justify-center rounded-2xl py-1 xl:w-[30%] lg:w-[50%] md:w-[70%] w-[40%]"
          >
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200 hover:transform hover:scale-110 transition-transform"
                src={`https://randomuser.me/api/portraits/${
                  i % 2 === 0 ? "women" : "men"
                }/${i}.jpg`}
                alt={`User ${i}`}
              />
            ))}
          </div>
          <h3 className="text-2xl md:text-xl font-semibold mt-4 md:mt-6">
            Explore 1000+ resources
          </h3>
          <p
            style={{ color: darkTheme.colors.textSecondary }}
            className="text-gray-400 text-sm md:text-base mt-2"
          >
            Over 1,000 articles on emerging tech trends and breakthroughs.
          </p>
          <button
            style={{
              backgroundColor: darkTheme.colors.cardBackground,
              color: darkTheme.colors.textPrimary,
              borderColor: darkTheme.colors.border,
            }}
            className="mt-4 md:mt-6 lg:px-6 py-3 md:px-2 px-2  border rounded-lg font-semibold flex items-center transition-colors duration-300"
          >
            Explore Resources
            <span className="ml-2 transform transition-transform duration-300 hover:translate-x-1 text-yellow-400 ">
              <MdArrowOutward/> 
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
