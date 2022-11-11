import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userAddress: String,
    orderItems: [String],
    payment: { type: String, required: true },
    transactionId: String,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
