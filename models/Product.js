import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, default: null },
    teamName1: { type: String, default: null },
    teamName2: { type: String, default: null },
    team1Image: { type: String, default: null },
    team2Image: { type: String, default: null },
    winTeamName: { type: String, default: null },
    status: { type: String, default: "active" },
    matchDate: { type: Number, default: null },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
