import mongoose from "mongoose";
import Blog from "../models/Blog.schema.js";

// Create Blog
export const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Blogs by Author ID
export const getBlogsByAuthorId = async (req, res) => {
  try {
    const authorId = req.params.authorId.trim(); // ✅ Trim to remove \n or spaces

    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ error: "Invalid author ID" });
    }

    const blogs = await Blog.find({ authorId }).sort({ createdAt: -1 });

    if (blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found for this author" });
    }

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Blog by Slug
export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Blog
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Like or Unlike Blog
export const toggleLikeBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { userId } = req.body;

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const alreadyLiked = blog.likes.includes(userId);

    if (alreadyLiked) {
      blog.likes = blog.likes.filter(id => id.toString() !== userId);
    } else {
      blog.likes.push(userId);
    }

    await blog.save();

    res.json({ likes: blog.likes, liked: !alreadyLiked });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
