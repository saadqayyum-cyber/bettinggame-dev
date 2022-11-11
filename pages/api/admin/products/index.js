import { getSession } from "next-auth/react";
import Product from "../../../../models/Product";
import db from "../../../../utils/db";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send("admin signin required");
  }
  // const { user } = session;
  if (req.method === "GET") {
    return getHandler(req, res);
  } else if (req.method === "POST") {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: "Method not allowed" });
  }
};
const postHandler = async (req, res) => {
  await db.connect();
  const newProduct = new Product({
    name: "Match of Finx and Aeth",
    slug: "sample-name-" + Math.random(),
    teamName1: "Pakistan kings",
    teamName2: "India kings",
    team1Image: "/images/game1.png",
    team2Image: "/images/game2.png",
    matchDate: "278446456",
  });

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: "Game created successfully", product });
};
const getHandler = async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
};
export default handler;
