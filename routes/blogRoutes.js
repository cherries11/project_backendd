import express from "express";
import {
  createBlogPost,
  getAllBlogPosts,
  updateBlogPost,
  deleteBlogPost,
} from "../controllers/blogController.js";
import { requireAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create a new blog post (accessible only to admin)
router.post("/", requireAdmin, createBlogPost);

// Retrieve all blog posts (accessible to all users)
router.get("/", getAllBlogPosts);

// Update a blog post (accessible only to admin)
router.put("/:postId", requireAdmin, updateBlogPost);

// Delete a blog post (accessible only to admin)
router.delete("/:postId", requireAdmin, deleteBlogPost);

export default router;
