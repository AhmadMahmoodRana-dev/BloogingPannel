// src/AddBlogPage.js
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  FiBook,
  FiEdit,
  FiUser,
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

const AddBlogPage = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [excerpt, setExcerpt] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const { addBlog } = useBlogStore();

  const handleSave = () => {
    if (title && slug && content && author) {
      const blogData = {
        title,
        slug,
        content,
        author,
        categories,
        tags,
        excerpt,
        featuredImage,
        isPublished,
      };
      console.log(blogData)
      addBlog(blogData);
      toast.success("SuccessFully Upload Blog")
      // Reset all form fields
      setTitle("");
      setSlug("");
      setContent("");
      setAuthor("");
      setCategories([]);
      setTags([]);
      setExcerpt("");
      setFeaturedImage("");
      setIsPublished(false);
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
        {/* Header */}
        <div
          style={{ borderColor: darkTheme.colors.border }}
          className="border-b pb-4"
        >
          <h1
            style={{ color: darkTheme.colors.textPrimary }}
            className="text-3xl font-bold flex items-center gap-2"
          >
            <FiBook style={{ color: darkTheme.colors.error }} />
            Create a New Blog Post
          </h1>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Title Field */}
            <div>
              <label
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-sm font-medium flex items-center gap-2 mb-2"
              >
                <FiEdit /> Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  borderColor: darkTheme.colors.border,
                  color: darkTheme.colors.textPrimary,
                }}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter blog title"
              />
            </div>

            {/* Slug Field */}
            <div>
              <label
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-sm font-medium flex items-center gap-2 mb-2"
              >
                <FiTag /> Slug
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                style={{
                  borderColor: darkTheme.colors.border,
                  color: darkTheme.colors.textPrimary,
                }}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="your-blog-slug"
              />
              <p className="mt-1 text-sm text-gray-500">
                Use hyphens between words
              </p>
            </div>

            {/* Content Editor */}
            <div>
              <label
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-sm font-medium flex items-center gap-2 mb-2"
              >
                <FiEdit style={{ color: darkTheme.colors.textPrimary }} />
                Content
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
                  value={content}
                  onEditorChange={(newContent) => setContent(newContent)}
                  init={{
                    height: 400,
                    menubar: false,
                    plugins: [
                      "anchor",
                      "autolink",
                      "charmap",
                      "codesample",
                      "emoticons",
                      "image",
                      "link",
                      "lists",
                      "media",
                      "searchreplace",
                      "table",
                      "visualblocks",
                      "wordcount",
                      "checklist",
                      "mediaembed",
                      "casechange",
                      "formatpainter",
                      "pageembed",
                      "a11ychecker",
                      "tinymcespellchecker",
                      "permanentpen",
                      "powerpaste",
                      "advtable",
                      "advcode",
                      "editimage",
                      "advtemplate",
                      "ai",
                      "mentions",
                      "tinycomments",
                      "tableofcontents",
                      "footnotes",
                      "mergetags",
                      "autocorrect",
                      "typography",
                      "inlinecss",
                      "markdown",
                      "importword",
                      "exportword",
                      "exportpdf",
                    ],
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                    ai_request: (request, respondWith) =>
                      respondWith.string(() =>
                        Promise.reject("See docs to implement AI Assistant")
                      ),
                    skin: "oxide",
                    content_css: "default",
                    content_style:
                      "body { font-family: Inter, sans-serif; font-size: 16px }",
                  }}
                />
              </div>
            </div>

            {/* Author Field */}
            <div>
              <label
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-sm font-medium flex items-center gap-2 mb-2"
              >
                <FiUser /> Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                style={{
                  borderColor: darkTheme.colors.border,
                  color: darkTheme.colors.textPrimary,
                }}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Author name"
              />
            </div>

            {/* Categories Field */}
            <div>
              <label
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-sm font-medium flex items-center gap-2 mb-2"
              >
                <FiFolder /> Categories
              </label>
              <TagInput
                tags={categories}
                setTags={setCategories}
                placeholder="Type a tag and press Enter"
              />
            </div>

            {/* Tags Field */}
            <div>
              <label
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-sm font-medium flex items-center gap-2 mb-2"
              >
                <FiTag /> Tags
              </label>
              <TagInput
                tags={tags}
                setTags={setTags}
                placeholder="Type a tag and press Enter"
              />
            </div>

            {/* Excerpt Field */}
            <div>
              <label
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-sm font-medium flex items-center gap-2 mb-2"
              >
                <FiEdit /> Excerpt
              </label>
              <textarea
                maxLength={300}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                style={{
                  borderColor: darkTheme.colors.border,
                  color: darkTheme.colors.textPrimary,
                }}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Short summary of the blog (max 300 characters)"
              />
            </div>

            {/* Featured Image Field */}
            <div>
              <label
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-sm font-medium flex items-center gap-2 mb-2"
              >
                <FiImage /> Featured Image URL
              </label>
              <input
                type="text"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                style={{
                  borderColor: darkTheme.colors.border,
                  color: darkTheme.colors.textPrimary,
                }}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Publish Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="w-5 h-5"
              />
              <label
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-sm font-medium flex items-center gap-2"
              >
                <FiCheckSquare /> Publish Now
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            style={{ borderColor: darkTheme.colors.border }}
            className="w-full sm:w-auto px-8 py-3 border text-white font-medium rounded-lg flex items-center justify-center gap-2"
          >
            <FiSave className="text-lg" />
            Publish Blog
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
