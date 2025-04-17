import React from "react";
import darkTheme from "../../colors/theme";
import { ArrowUpRight, Heart, MessageCircle, Share } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({image,author,category,date,title,description,likes,comments,shares,slug}) => {
  return (
    <div
      className="group bg-[#141414] p-6 rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:-translate-y-1.5 cursor-pointer flex flex-col overflow-hidden"
    >
      <div className="flex flex-col gap-6 flex-1">
        {/* Author Info */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative flex-shrink-0">
            <img
              src={image}
              alt={image}
              style={{ borderColor: darkTheme.colors.border }}
              className="w-12 h-12 rounded-full object-cover border-2"
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-100 truncate">{author}</p>
            <p
              style={{ color: darkTheme.colors.textSecondary }}
              className="text-sm truncate"
            >
              {category}
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-3 flex-1">
          <p
            style={{ color: darkTheme.colors.textSecondary }}
            className="text-xs font-mono"
          >
            {date}
          </p>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent line-clamp-2">
            {title}
          </h2>
          <div className="relative">
            <p
              style={{ color: darkTheme.colors.textSecondary }}
              className="leading-relaxed line-clamp-3"
            >
              {description}
            </p>
            {/* Fade-out effect for overflow text */}
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#141414] to-transparent" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
          <div
            style={{ color: darkTheme.colors.textSecondary }}
            className="flex gap-6 flex-wrap"
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
          <Link to={`/blog/${slug}`}
            style={{
              backgroundColor: darkTheme.colors.cardBackground,
              borderColor: darkTheme.colors.border,
            }}
            className="flex items-center gap-2 px-4 py-3 rounded-lg border flex-shrink-0"
          >
            <span
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-semibold"
            >
              Read Article
            </span>
            <ArrowUpRight color="#f0b100" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;