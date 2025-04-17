import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import darkTheme from "../../colors/theme";
import BlogCard from "../Blog/BlogCard";
import useBlogStore from "../../store/useBlogStore";

const categories = [
  "All",
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 200 }, // strong start offset
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut", // quick but sharp
    },
  },
};

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { getBlog, data } = useBlogStore();

  useEffect(() => {
    getBlog();
  }, []);

  

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
            className="px-5 py-2.5 rounded-sm md:text-sm text-xs font-medium transition-all border bg-[#1a1a1a] text-gray-300 hover:bg-[#252525]"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards with Strong Swipe Animation */}
      <motion.div
        className="grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {data.map((post, index) => (
          <motion.div key={index} variants={cardVariants}>
            <BlogCard
              author={post.author}
              category={post.category}
              comments={post.comments}
              date={post.createdAt}
              description={post.excerpt}
              image="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740"
              likes={post.likes}
              shares={post.shares}
              title={post.title}
              slug={post.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogList;
