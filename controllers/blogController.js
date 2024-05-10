
import BlogPost from "../models/blogModel.js";

// Create a new blog post
export const createBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { userId } = req.user;
    const blogPost = new BlogPost({
      title,
      content,
      author: userId,
    });
    await blogPost.save();
    res.status(201).json({
      success: true,
      message: "Blog post created successfully",
      blogPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating blog post",
      error: error.message,
    });
  }
};

// Retrieve all blog posts
export const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate("author", "username"); // Populate author field with username
    res.status(200).json({
      success: true,
      message: "Blog posts retrieved successfully",
      blogPosts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving blog posts",
      error: error.message,
    });
  }
};

// Update a blog post
export const updateBlogPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, content } = req.body;
    const updatedPost = await BlogPost.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Blog post updated successfully",
      updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating blog post",
      error: error.message,
    });
  }
};

// Delete a blog post
export const deleteBlogPost = async (req, res) => {
  try {
    const { postId } = req.params;
    await BlogPost.findByIdAndDelete(postId);
    res.status(200).json({
      success: true,
      message: "Blog post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting blog post",
      error: error.message,
    });
  }
};
