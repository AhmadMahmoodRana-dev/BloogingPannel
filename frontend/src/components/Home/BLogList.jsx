import React, { useState } from "react";
import { ArrowUpRight, Heart, MessageCircle, Share } from "lucide-react";
import darkTheme from "../../colors/theme";
import BlogCard from "../Blog/BlogCard";

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
          <BlogCard
            author={post.author}
            category={post.category}
            comments={post.comments}
            date={post.date}
            description={post.description}
            image={post.avatar}
            likes={post.likes}
            shares={post.shares}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
