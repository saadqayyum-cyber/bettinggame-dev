import Format from "../layout/format";
import Trust from "../components/Trust";
import GameCard from "../components/GameCard";
import Product from "../models/Product";
import db from "../utils/db";
import Modal from "../components/Modal";
export default function Home({ products }) {
  return (
    <Format>
      <div className="p-10 ">
        <h1 className=" mt-[5rem] text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Bet on Games
        </h1>
        <h3 className="mb-5 text-center text-lg font-medium text-gray-900 dark:text-white">
          Select your Favorite 12 team which you think will win.
        </h3>
        <form>
          {products.map((product) => (
            <GameCard product={product} key={product.slug}></GameCard>
          ))}
        </form>
        <div className="text-center">
          <Modal />
        </div>
      </div>
      <Trust></Trust>
    </Format>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().limit(12).lean();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
