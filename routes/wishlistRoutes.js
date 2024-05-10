import express from "express";
import {
  createWishlistController,
  getWishlistController,
  updateWishlistController,
  deleteWishlistController,
} from "../controllers/wishlistController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create wishlist
router.post("/wishlist", requireSignIn, createWishlistController);

// Get user's wishlist
router.get("/wishlist", requireSignIn, getWishlistController);

// Update wishlist
router.put("/wishlist/:wishlistId", requireSignIn, updateWishlistController);

// Delete wishlist
router.delete("/wishlist/:wishlistId", requireSignIn, deleteWishlistController);

export default router;
