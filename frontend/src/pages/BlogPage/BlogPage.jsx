import React from "react";
import Blog from "../../assets/blog.png";
import darkTheme from "../../colors/theme";
import { FaRegEye, FaHeart, FaLocationArrow } from "react-icons/fa";
import ReadMore from "../../components/Blog/ReadMore";
import BlogCard from "../../components/Blog/BlogCard";
import Navbar from "../../components/Navbar";

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
  // Define your content as variables for cleaner code
  const introText =
    "Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.";
  const aiText = `Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.`;
  const predictiveText =
    "One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.";

  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: darkTheme.colors.background }}
        className="text-white font-sans"
      >
        {/* Header Section */}
        <div
          className="relative h-[500px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${Blog})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              The Rise of Artificial Intelligence in Healthcare
            </h1>
          </div>
        </div>
        {/* Modified Blog Info Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <ReadMore
                text={introText}
                maxLength={300}
                className="mt-2 text-gray-300"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Artificial Intelligence (AI)
              </h2>
              <ReadMore
                text={aiText}
                maxLength={800}
                className="mt-2 text-gray-300"
              />
              <ReadMore
                text={aiText}
                maxLength={800}
                className="mt-2 text-gray-300"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Predictive Analytics and Disease Prevention
              </h2>
              <ReadMore
                text={predictiveText}
                maxLength={200}
                className="mt-2 text-gray-300"
              />
            </div>
          </div>
          {/* Sidebar Section */}
          <div className="space-y-6">
            <div
              style={{ borderColor: darkTheme.colors.border }}
              className="border p-4 rounded"
            >
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="flex justify-center items-center gap-2">
                  <FaHeart size={20} color="#FF5500" />
                  50k
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
                October 15, 2023
              </p>
              <p className="text-md">
                <span
                  className="text-lg"
                  style={{ color: darkTheme.colors.textSecondary }}
                >
                  Category :
                </span>{" "}
                Healthcare
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
                Dr. Emily Walker
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
