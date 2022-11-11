import Format from "../layout/format";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import TrustHome from "../components/TrustHome";
import GameCard from "../components/GameCard";
import Product from "../models/Product";
import db from "../utils/db";
import Modal2 from "../components/Modal2";

export default function Home({ products }) {
  return (
    <Format>
      <Hero></Hero>
      <Partners></Partners>
      <div className="p-10">
        <h1 className=" text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Bet on Games
        </h1>
        <h3 className="mb-5 text-center text-lg font-medium text-gray-900 dark:text-white">
          Select your Favorite team which you think will win.
        </h3>
        <form>
          {products.map((product) => (
            <GameCard product={product} key={product.slug}></GameCard>
          ))}
        </form>
        <div className="text-center">
          <Modal2 />
        </div>
      </div>

      <TrustHome></TrustHome>
    </Format>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().limit(7).lean();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
