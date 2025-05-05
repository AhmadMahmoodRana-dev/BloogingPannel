import React from "react";
import darkTheme from "../../colors/theme";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import useBlogStore from "../../store/useBlogStore";
import { useNavigate } from "react-router-dom";

const BlogFlipCard = ({ blog }) => {
  const navigate = useNavigate();
  const handleEdit = (doc) => {
    navigate("/dashboard/create-blog", { state: { doc } });
  };
  const { deleteBlog } = useBlogStore();
  return (
    <div className="group [perspective:1000px] w-[360px] min-h-[400px] max-h-[400px] ">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div
          style={{
            backgroundColor: darkTheme.colors.background,
            borderColor: darkTheme.colors.border,
          }}
          className="border absolute w-full  h-auto py-5 rounded-xl shadow-xl backface-hidden "
        >
          <p className="text-2xl font-semibold text-white tracking-wider px-4 text-center">
            {blog?.title}
          </p>
          <p
            style={{ color: darkTheme.colors.textSecondary }}
            className="text-white tracking-wider px-4 py-3 text-center"
          >
            {blog?.excerpt}
          </p>
          <div className="category w-full flex gap-4 justify-center items-center">
            {blog?.categories.map((category) => {
              return (
                <span
                  style={{
                    backgroundColor: darkTheme.colors.cardBackground,
                    borderColor: darkTheme.colors.border,
                  }}
                  className="text-sm text-gray-400 p-2 rounded-lg border"
                >
                  {category}
                </span>
              );
            })}
          </div>
        </div>

        {/* Back Side */}
        <div
          style={{
            backgroundColor: darkTheme.colors.background,
            borderColor: darkTheme.colors.border,
          }}
          className="absolute w-full min-h-[400px] max-h-[400px] border rounded-xl shadow-xl [transform:rotateY(180deg)] backface-hidden flex items-center  justify-evenly"
        >
          <button
            onClick={() => deleteBlog(blog?._id)}
            className="p-5 rounded-full bg-red-500 text-white  hover:bg-red-600 transition"
          >
            <MdDelete size={22} />
          </button>
          <button onClick={() => handleEdit(blog)} className="cursor-pointer p-5 rounded-full bg-yellow-400 text-white  hover:bg-yellow-500 transition">
            <MdModeEdit size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogFlipCard;
