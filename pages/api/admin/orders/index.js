import Order from "../../../../models/Order";
import db from "../../../../utils/db";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  if (req.method === "GET") {
    return getHandler(req, res);
  } else if (req.method === "POST") {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: "Method not allowed" });
  }
};

const postHandler = async (req, res) => {
  const data = req.body;
  await db.connect();
  const newOrder = new Order({
    userAddress: data.userAddress,
    orderItems: data.orderItems,
    payment: data.payment,
    transactionId: data.transactionId,
  });

  const order = await newOrder.save();
  await db.disconnect();
  res.send({ message: "Order placed successfully", order });
};
const getHandler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send("admin signin required");
  }

  await db.connect();
  const orders = await Order.find({});
  await db.disconnect();
  res.send(orders);
};
export default handler;
