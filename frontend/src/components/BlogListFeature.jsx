import React from "react";
import darkTheme from "../colors/theme";
import { MdArrowOutward } from "react-icons/md";

const BlogListFeature = () => {
  return (
    <div
      style={{ backgroundColor: darkTheme.colors.cardBackground }}
      className="w-full md:min-h-[40vh] min-h-[50vh] h-auto flex flex-col md:flex-row items-center justify-between gap-8 xl:px-18 lg:px-10 px-6 py-12 md:py-0"
    >
      <div className="w-full md:w-auto flex flex-col md:items-start items-center">
        <button
          style={{
            color: darkTheme.colors.textPrimary,
            borderColor: darkTheme.colors.border,
          }}
          className="bg-[#333333] px-4 rounded-sm lg:w-auto w-full max-w-[320px] py-3 mb-4 border-2 text-sm md:text-base"
        >
          A Knowledge Treasure Trove
        </button>
        <h1
          style={{ color: darkTheme.colors.textPrimary }}
          className="text-3xl lg:text-4xl xl:text-5xl md:text-2xl md:text-left text-center font-semibold leading-tight"
        >
          Explore FutureTech's In-Depth Blog Posts
        </h1>
      </div>
      
      <button
        style={{
          backgroundColor: darkTheme.colors.background,
          color: darkTheme.colors.textPrimary,
          borderColor: darkTheme.colors.border,
        }}
        className="px-6 py-3 rounded-md border flex justify-center items-center gap-3 w-full md:w-auto hover:scale-105 transition-transform"
      >
        View All Blogs <MdArrowOutward size={20} color="#ffd119" />
      </button>
    </div>
  );
};

export default BlogListFeature;