import React, { useState } from "react";
import { ArrowUpRight, Heart, MessageCircle, Share } from "lucide-react";
import darkTheme from "../../colors/theme";

const categories = [
  "All",
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
];

const blogPosts = [
  {
    id: 1,
    author: "John Techson",
    category: "Quantum Computing",
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    description:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "24.5k",
    comments: 50,
    shares: 20,
    avatar:
      "https://img.freepik.com/premium-vector/cool-cartoon-boy-avatar_987671-675.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740", // Replace with your own image path
  },
  {
    id: 2,
    author: "Sarah Ethicist",
    category: "AI Ethics",
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    description:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "32k",
    comments: 72,
    shares: 18,
    avatar:
      "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740", // Replace with your own image path
  },
  {
    id: 3,
    author: "John Techson",
    category: "Quantum Computing",
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    description:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "24.5k",
    comments: 50,
    shares: 20,
    avatar:
      "https://img.freepik.com/premium-vector/cool-cartoon-boy-avatar_987671-675.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740", // Replace with your own image path
  },
  {
    id: 4,
    author: "Sarah Ethicist",
    category: "AI Ethics",
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    description:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "32k",
    comments: 72,
    shares: 18,
    avatar:
      "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740", // Replace with your own image path
  },
];
const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div
      style={{ backgroundColor: darkTheme.colors.background }}
      className="min-h-screen xl:px-16 xl:py-[5.7rem] lg:px-10 lg:py-[2.95rem] md:px-4 md:py-[1.82rem] p-4 space-y-8"
    >
      {/* Tabs */}
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2 md:gap-5 xl:gap-10 lg:gap-8 2xl:mx-16 justify-center">
        {categories.map((cat) => (
          <button
            onClick={() => setSelectedCategory(cat)}
            style={{ borderColor: darkTheme.colors.border }}
            key={cat}
            className={`px-5 py-2.5 rounded-sm  md:text-sm text-xs font-medium transition-all border
              ${
                cat === "All"
                  ? "bg-[#1a1a1a] text-gray-300 hover:bg-[#252525]"
                  : "bg-[#1a1a1a] text-gray-300 hover:bg-[#252525]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-[#141414] p-6 rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all hover:-translate-y-1.5 cursor-pointer"
          >
            <div className="flex flex-col gap-6">
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    style={{ borderColor: darkTheme.colors.border }}
                    className="w-12 h-12 rounded-full object-cover border-2"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent" />
                </div>
                <div>
                  <p className="font-semibold text-gray-100">{post.author}</p>
                  <p
                    style={{ color: darkTheme.colors.textSecondary }}
                    className="text-sm text-transparent"
                  >
                    {post.category}
                  </p>
                </div>
              </div>

              {/* Blog Content */}
              <div className="space-y-3">
                <p
                  style={{ color: darkTheme.colors.textSecondary }}
                  className="text-xs font-mono"
                >
                  {post.date}
                </p>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {post.title}
                </h2>
                <p
                  style={{ color: darkTheme.colors.textSecondary }}
                  className="leading-relaxed"
                >
                  {post.description}
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
                    <span className="text-xs font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs font-medium">{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Share className="w-4 h-4" />
                    <span className="text-xs font-medium">{post.shares}</span>
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
        ))}
      </div>
    </div>
  );
};

export default BlogList;
