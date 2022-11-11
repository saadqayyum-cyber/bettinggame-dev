import { getSession } from "next-auth/react";
import Order from "../../../../../models/Order";
import Product from "../../../../../models/Product";
import db from "../../../../../utils/db";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send("signin required");
  }

  const { user } = session;
  if (req.method === "GET") {
    return getHandler(req, res, user);
  } else {
    return res.status(400).send({ message: "Method not allowed" });
  }
};
const getHandler = async (req, res) => {
  await db.connect();
  const order = await Order.findById(req.query.id);
  await db.disconnect();
  res.send(order);
};

export default handler;
