import Link from "next/link";
const Partners = () => {
  return (
    <section className="bg-orange-50 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="flex flex-row justify-center items-center">
          <Link href="http://Magiceden.io/marketplace/focus5">
            <a className="flex items-center   lg:justify-center">
              <img src="./images/magic.png" width={200} alt="1" />
            </a>
          </Link>
          <Link href="#">
            <a className="flex items-center lg:justify-center">
              <img src="./images/logo.png" width={200} alt="1" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
