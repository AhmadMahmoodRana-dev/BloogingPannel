import React, { useEffect } from "react";
import darkTheme from "../colors/theme";
import BlogFlipCard from "../components/Blog/BlogFlipCard";
import useBlogStore from "../store/useBlogStore";

const AllBlogs = () => {
  const { getBlog, data } = useBlogStore();

  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div
      className="w-full min-h-screen h-auto p-10"
      style={{ backgroundColor: darkTheme.colors.background }}
    >
      <div
        className="w-full h-full rounded-4xl"
        style={{ backgroundColor: darkTheme.colors.cardBackground }}
      >
        <h1
          className="text-3xl p-8 font-semibold tracking-wider"
          style={{ color: darkTheme.colors.textPrimary }}
        >
          All Posts
        </h1>
        <div className="w-full justify-center min-h-[76vh] gap-4 flex flex-wrap h-auto pb-10">
          {data.map((blog, index) => {
            return <BlogFlipCard key={index} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
