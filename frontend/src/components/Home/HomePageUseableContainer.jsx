import React from "react";
import darkTheme from "../../colors/theme";
import { MdArrowOutward } from "react-icons/md";

const HomePageUseableContainer = ({
  SmallHeading,
  MainHeading,
  ButtonText,
}) => {
  return (
    <div
      style={{ backgroundColor: darkTheme.colors.cardBackground }}
      className="w-full  h-auto flex flex-col md:flex-row items-center justify-between gap-8 xl:px-18 lg:px-10 px-6 py-12 md:py-24"
    >
      <div className="w-full md:w-auto flex flex-col md:items-start items-center">
        <button
          style={{
            color: darkTheme.colors.textPrimary,
            borderColor: darkTheme.colors.border,
          }}
          className="bg-[#333333] px-4 rounded-sm lg:w-auto w-full max-w-[320px] py-3 mb-4 border-2 text-sm md:text-base"
        >
          {SmallHeading}
        </button>
        <h1
          style={{ color: darkTheme.colors.textPrimary }}
          className="text-3xl lg:text-4xl xl:text-5xl md:text-2xl md:text-left text-center font-semibold leading-tight"
        >
          {MainHeading}
        </h1>
      </div>
      {ButtonText ? (
        <button
          style={{
            backgroundColor: darkTheme.colors.background,
            color: darkTheme.colors.textPrimary,
            borderColor: darkTheme.colors.border,
          }}
          className="px-6 py-3 rounded-md border flex justify-center items-center gap-3 w-full md:w-[18%]  hover:scale-105 transition-transform"
        >
          {ButtonText} <MdArrowOutward size={20} color="#ffd119" />
        </button>
      ) : null}
    </div>
  );
};

export default HomePageUseableContainer;
