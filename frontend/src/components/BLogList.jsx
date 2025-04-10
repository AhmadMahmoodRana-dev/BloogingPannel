import React from "react";
import { ArrowUpRight } from "lucide-react";

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
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: 50,
    shares: 20,
    avatar: "/avatars/john.png", // Replace with your own image path
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
    avatar: "/avatars/sarah.png", // Replace with your own image path
  },
];

const BlogList = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen p-6 space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 bg-[#1e1e1e] rounded hover:bg-[#2a2a2a] transition-all"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#1a1a1a] p-6 rounded-lg flex flex-col gap-4"
          >
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-gray-400">{post.category}</p>
              </div>
            </div>

            {/* Blog Content */}
            <div>
              <p className="text-sm text-gray-400">{post.date}</p>
              <h2 className="text-xl font-bold mt-1">{post.title}</h2>
              <p className="text-gray-300 mt-2 text-sm">{post.description}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-4 text-sm text-gray-400">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
                <span>🔁 {post.shares}</span>
              </div>
              <button className="flex items-center gap-1 px-3 py-1 border border-gray-600 text-sm rounded hover:bg-gray-700 transition">
                View Blog <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;




