import mongoose from "mongoose";

const { Schema } = mongoose;

// Wishlist Schema
const wishlistSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the user who owns the wishlist
      required: true,
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: "Product", // Reference to the products in the wishlist
    }],
  },
  { timestamps: true }
);

export default mongoose.model("Wishlist", wishlistSchema);
