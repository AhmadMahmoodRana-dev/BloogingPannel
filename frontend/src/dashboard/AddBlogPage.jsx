import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  FiBook,
  FiEdit,
  FiTag,
  FiFolder,
  FiSave,
  FiImage,
  FiCheckSquare,
} from "react-icons/fi";
import darkTheme from "../colors/theme";
import TagInput from "../components/Blog/TagInput";
import useBlogStore from "../store/useBlogStore";
import { toast, ToastContainer } from "react-toastify";
import useAuthStore from "../store/useAuthStore";
import { useLocation } from "react-router-dom";

const AddBlogPage = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    slug: "",
    content: "",
    categories: [],
    tags: [],
    excerpt: "",
    featuredImage: "",
    isPublished: false,
  });

  const { addBlog, editBlog } = useBlogStore();
  const { getProfile, user } = useAuthStore();
  const authorId = user?._id;
  const author = user?.name;

  const { state } = useLocation();
  const { doc } = state || {};

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (doc) {
      setBlogData({
        title: doc.title || "",
        slug: doc.slug || "",
        content: doc.content || "",
        categories: doc.categories || [],
        tags: doc.tags || [],
        excerpt: doc.excerpt || "",
        featuredImage: doc.featuredImage || "",
        isPublished: doc.isPublished || false,
      });
    }
  }, [doc]);

  const handleChange = (field, value) => {
    setBlogData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    const { title, slug, content } = blogData;
    if (title && slug && content && author) {
      const blog = {
        ...blogData,
        author,
        authorId,
      };

      if (doc?._id) {
        editBlog(doc._id, blog);
        toast.success("Blog updated successfully");
      } else {
        addBlog(blog);
        toast.success("Blog created successfully");
      }

      setBlogData({
        title: "",
        slug: "",
        content: "",
        categories: [],
        tags: [],
        excerpt: "",
        featuredImage: "",
        isPublished: false,
      });
    } else {
      toast.error("Please fill all required fields");
    }
  };

  return (
    <div
      style={{ backgroundColor: darkTheme.colors.background }}
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
    >
      <div
        style={{
          backgroundColor: darkTheme.colors.cardBackground,
          borderColor: darkTheme.colors.border,
        }}
        className="border max-w-full mx-auto rounded-xl shadow-md overflow-hidden p-6 space-y-8"
      >
        <div
          style={{ borderColor: darkTheme.colors.border }}
          className="border-b pb-4"
        >
          <h1
            style={{ color: darkTheme.colors.textPrimary }}
            className="text-3xl font-bold flex items-center gap-2"
          >
            <FiBook style={{ color: darkTheme.colors.error }} />
            {doc ? "Edit Blog Post" : "Create a New Blog Post"}
          </h1>
        </div>

        <div className="space-y-6">
          {/* Title */}
          <div>
            <label
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-medium flex items-center gap-2 mb-2"
            >
              <FiEdit /> Title
            </label>
            <input
              type="text"
              value={blogData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              style={{
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textPrimary,
              }}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter blog title"
            />
          </div>

          {/* Slug */}
          <div>
            <label
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-medium flex items-center gap-2 mb-2"
            >
              <FiTag /> Slug
            </label>
            <input
              type="text"
              value={blogData.slug}
              onChange={(e) => handleChange("slug", e.target.value)}
              style={{
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textPrimary,
              }}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="your-blog-slug"
            />
            <p className="mt-1 text-sm text-gray-500">
              Use hyphens between words
            </p>
          </div>

          {/* Content */}
          <div>
            <label
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-medium flex items-center gap-2 mb-2"
            >
              <FiEdit /> Content
            </label>
            <div
              style={{
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textPrimary,
              }}
              className="border rounded-lg overflow-hidden"
            >
              <Editor
                apiKey="xhbxdw0d188bxkyl0jnkty1sn6wyr1eoz1bktw2s3yzlcmsc"
                value={blogData.content}
                onEditorChange={(newContent) =>
                  handleChange("content", newContent)
                }
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    "link", "image", "media", "table", "lists", "wordcount",
                  ],
                  toolbar:
                    "undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | link image media",
                  skin: "oxide",
                  content_css: "default",
                  content_style:
                    "body { font-family:Inter,sans-serif; font-size:16px }",
                }}
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <label
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-medium flex items-center gap-2 mb-2"
            >
              <FiFolder /> Categories
            </label>
            <TagInput
              tags={blogData.categories}
              setTags={(tags) => handleChange("categories", tags)}
              placeholder="Type a category and press Enter"
            />
          </div>

          {/* Tags */}
          <div>
            <label
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-medium flex items-center gap-2 mb-2"
            >
              <FiTag /> Tags
            </label>
            <TagInput
              tags={blogData.tags}
              setTags={(tags) => handleChange("tags", tags)}
              placeholder="Type a tag and press Enter"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-medium flex items-center gap-2 mb-2"
            >
              <FiEdit /> Excerpt
            </label>
            <textarea
              maxLength={300}
              value={blogData.excerpt}
              onChange={(e) => handleChange("excerpt", e.target.value)}
              style={{
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textPrimary,
              }}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Short summary of the blog (max 300 characters)"
            />
          </div>

          {/* Featured Image */}
          <div>
            <label
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-medium flex items-center gap-2 mb-2"
            >
              <FiImage /> Featured Image URL
            </label>
            <input
              type="text"
              value={blogData.featuredImage}
              onChange={(e) =>
                handleChange("featuredImage", e.target.value)
              }
              style={{
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textPrimary,
              }}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Publish Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={blogData.isPublished}
              onChange={(e) =>
                handleChange("isPublished", e.target.checked)
              }
              className="w-5 h-5"
            />
            <label
              style={{ color: darkTheme.colors.textPrimary }}
              className="text-sm font-medium flex items-center gap-2"
            >
              <FiCheckSquare /> Publish Now
            </label>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            style={{ borderColor: darkTheme.colors.border }}
            className="w-full sm:w-auto px-8 py-3 border text-white font-medium rounded-lg flex items-center justify-center gap-2"
          >
            <FiSave className="text-lg" />
            {doc ? "Update Blog" : "Publish Blog"}
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AddBlogPage;
