import React, { useEffect } from "react";
import darkTheme from "../../colors/theme";
import { FaRegEye, FaHeart, FaLocationArrow } from "react-icons/fa";
import BlogCard from "../../components/Blog/BlogCard";
import Navbar from "../../components/Navbar";
import useBlogStore from "../../store/useBlogStore";
import { useParams } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

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
];

const BlogPage = () => {
  const { slug } = useParams();
  const { getSingleSlugBlog, singleData,likeBlog,isLikeMap } = useBlogStore();
  const {getProfile,user} = useAuthStore() 

  useEffect(() => {
    getSingleSlugBlog(slug);
    getProfile()
  }, []);

  const isLiked = isLikeMap?.[singleData?._id] ?? singleData?.likes?.includes(user?._id);

  

  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: darkTheme.colors.background }}
        className="text-white font-sans"
      >
        {/* Header Section */}
        <div className="relative w-full">
  <img 
    src={singleData.featuredImage} 
    alt="Blog header" 
    className="w-full h-full object-cover aspect-video"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
    <h1 className="text-3xl md:text-5xl font-bold text-center w-[70%]">
      {singleData.title}
    </h1>
  </div>
</div>
        {/* Modified Blog Info Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Introduction</h2>
              {singleData.excerpt}
            </div>

            <div
              className="blog-content prose prose-invert max-w-none text-gray-300"
              dangerouslySetInnerHTML={{ __html: singleData.content }}
            />
          </div>
          {/* Sidebar Section */}
          <div className="space-y-6">
            <div
              style={{ borderColor: darkTheme.colors.border }}
              className="border p-4 rounded"
            >
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="flex justify-center items-center gap-2">
                  <FaHeart className="cursor-pointer" onClick={() => likeBlog(singleData?._id,user?._id,slug)} size={20} color={`${isLiked ? "red" : ""}`} />
                  {singleData?.likes?.length}
                </span>
                <span className="flex justify-center items-center gap-2">
                  <FaRegEye size={20} />
                  50k
                </span>
                <span className="flex justify-center items-center gap-2">
                  <FaLocationArrow size={20} />
                  50k
                </span>
              </div>
            </div>
            <div
              style={{ borderColor: darkTheme.colors.border }}
              className="border p-4 rounded"
            >
              <p className="text-md">
                <span
                  className="text-lg"
                  style={{ color: darkTheme.colors.textSecondary }}
                >
                  Publication Date :
                </span>{" "}
                {new Date(singleData.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
              </p>
              <p className="text-md flex flex-wrap gap-2">
                <span
                  className="text-lg"
                  style={{ color: darkTheme.colors.textSecondary }}
                >
                  Category:{" "}
                </span>
                {singleData?.categories?.map((val, index) => (
                  <span key={index}>{val}</span>
                ))}
              </p>
              <p className="text-md">
                <span
                  className="text-lg"
                  style={{ color: darkTheme.colors.textSecondary }}
                >
                  Reading Time :
                </span>{" "}
                10 Min
              </p>
              <p className="text-md">
                <span
                  className="text-lg"
                  style={{ color: darkTheme.colors.textSecondary }}
                >
                  Author :
                </span>{" "}
                {singleData.author}{" "}
              </p>
            </div>
            <div
              style={{ borderColor: darkTheme.colors.border }}
              className="border p-4 rounded"
            >
              <h3 className="font-semibold mb-2">Table of Contents</h3>
              <ul className="space-y-1 list-disc list-inside text-gray-300">
                <li>Introduction</li>
                <li>AI in Diagnostic Imaging</li>
                <li>Predictive Analytics and Disease Prevention</li>
                <li>Personalized Treatment Plans</li>
                <li>Drug Discovery and Research</li>
                <li>AI in Telemedicine</li>
                <li>Ethical Considerations</li>
                <li>The Future of AI in Healthcare</li>
                <li>Conclusion</li>
              </ul>
            </div>
            <div
              style={{ borderColor: darkTheme.colors.border }}
              className="border p-4 rounded"
            >
              <h3 className="font-semibold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {singleData?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#ff5500]/10 text-[#ff5500] px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Similar News Section */}
        <div
          style={{
            backgroundColor: darkTheme.colors.background,
            borderColor: darkTheme.colors.border,
          }}
          className="py-12 border-t"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Similar News</h2>
              <button className="text-[#ff5500] hover:underline">
                View All News ↗
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {blogPosts.map((post) => (
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
        </div>
      </div>
    </>
  );
};

export default BlogPage;
