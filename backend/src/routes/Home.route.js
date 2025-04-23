import { Router } from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlogBySlug, getBlogsByAuthorId, toggleLikeBlog, updateBlog } from "../controllers/blog.controller.js";
import auth from "../middlewares/auth.middleware.js";

const Home = Router();


Home.post("/created",auth,createBlog);
Home.get("/", getAllBlogs);
Home.get("/:slug", getBlogBySlug);
Home.get("/author/:authorId",getBlogsByAuthorId);
Home.put("/:id", updateBlog);
Home.delete("/:id", deleteBlog);
Home.post("/:blogId/like",auth, toggleLikeBlog);


export default Home;