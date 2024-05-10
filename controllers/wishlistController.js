import wishlistModel from "../models/wishlistModel.js";

// Create a new wishlist
export const createWishlistController = async (req, res) => {
  try {
    const { user, products } = req.body;
    const wishlist = new wishlistModel({
      user,
      products,
    });
    await wishlist.save();
    res.status(201).send({
      success: true,
      message: "Wishlist created successfully",
      wishlist,
    });
  } catch (error) {
    console.error("Error creating wishlist:", error);
    res.status(500).send({
      success: false,
      message: "Error creating wishlist",
      error: error.message,
    });
  }
};

// Retrieve user's wishlist
export const getWishlistController = async (req, res) => {
  try {
    const { userId } = req.user; // Assuming user ID is available in request object
    const wishlist = await wishlistModel.findOne({ user: userId }).populate("products");
    res.status(200).send({
      success: true,
      message: "User's wishlist retrieved successfully",
      wishlist,
    });
  } catch (error) {
    console.error("Error retrieving wishlist:", error);
    res.status(500).send({
      success: false,
      message: "Error retrieving wishlist",
      error: error.message,
    });
  }
};

// Update user's wishlist
export const updateWishlistController = async (req, res) => {
  try {
    const { wishlistId } = req.params;
    const { products } = req.body;
    const updatedWishlist = await wishlistModel.findByIdAndUpdate(wishlistId, { products }, { new: true });
    res.status(200).send({
      success: true,
      message: "Wishlist updated successfully",
      wishlist: updatedWishlist,
    });
  } catch (error) {
    console.error("Error updating wishlist:", error);
    res.status(500).send({
      success: false,
      message: "Error updating wishlist",
      error: error.message,
    });
  }
};

// Delete user's wishlist
export const deleteWishlistController = async (req, res) => {
  try {
    const { wishlistId } = req.params;
    await wishlistModel.findByIdAndDelete(wishlistId);
    res.status(200).send({
      success: true,
      message: "Wishlist deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting wishlist:", error);
    res.status(500).send({
      success: false,
      message: "Error deleting wishlist",
      error: error.message,
    });
  }
};
