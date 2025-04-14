import React from "react";
import darkTheme from "../../colors/theme";
import { ArrowUpRight, Heart, MessageCircle, Share } from "lucide-react";

const BlogCard = ({image,author,category,date,title,description,likes,comments,shares}) => {
  return (
    <div
      className="group bg-[#141414] p-6 rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:-translate-y-1.5 cursor-pointer"
    >
      <div className="flex flex-col gap-6">
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={image}
              alt={image}
              style={{ borderColor: darkTheme.colors.border }}
              className="w-12 h-12 rounded-full object-cover border-2"
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent" />
          </div>
          <div>
            <p className="font-semibold text-gray-100">{author}</p>
            <p
              style={{ color: darkTheme.colors.textSecondary }}
              className="text-sm text-transparent"
            >
              {category}
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-3">
          <p
            style={{ color: darkTheme.colors.textSecondary }}
            className="text-xs font-mono"
          >
            {date}
          </p>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            {title}
          </h2>
          <p
            style={{ color: darkTheme.colors.textSecondary }}
            className="leading-relaxed"
          >
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap  items-center justify-between mt-4">
          <div
            style={{ color: darkTheme.colors.textSecondary }}
            className="flex gap-6"
          >
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4" />
              <span className="text-xs font-medium">{likes}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs font-medium">{comments}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Share className="w-4 h-4" />
              <span className="text-xs font-medium">{shares}</span>
            </div>
          </div>
          <button
            style={{
              backgroundColor: darkTheme.colors.cardBackground,
              borderColor: darkTheme.colors.border,
            }}
            className="flex items-center gap-2 px-4 py-3  rounded-lg border md:mt-0 mt-4"
          >
            <span
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-semibold"
            >
              Read Article
            </span>
            <ArrowUpRight color="#f0b100" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
