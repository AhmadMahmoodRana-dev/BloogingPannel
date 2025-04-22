import { Router } from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlogBySlug, toggleLikeBlog, updateBlog } from "../controllers/blog.controller.js";
import auth from "../middlewares/auth.middleware.js";

const Home = Router();


Home.post("/created",auth,createBlog);
Home.get("/", getAllBlogs);
Home.get("/:slug", getBlogBySlug);
Home.put("/:id", updateBlog);
Home.delete("/:id", deleteBlog);
Home.post("/:blogId/like", toggleLikeBlog);


export default Home;