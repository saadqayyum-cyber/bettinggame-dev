import { ImCoinDollar } from "react-icons/im";
import { FaBoxes } from "react-icons/fa";

import { GiToken } from "react-icons/gi";

import { AiOutlineWallet, AiOutlineSelect } from "react-icons/ai";

const TrustHome = () => {
  return (
    <section className="bg-orange-50 dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-orange-600 dark:text-orange-500">
            Trusted Worldwide
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Join with 1,000+ members!
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Want to collect Rev share or get free bets? Grab a Focus 5 card and
            a Parlay Or Bust NFT today!
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-orange-600 hover:text-purple-800 dark:text-orange-500 dark:hover:text-white"
              >
                Explore More About us
                {/* <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg> */}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-orange-600 hover:text-purple-800 dark:text-orange-500 dark:hover:text-white"
              >
                Visit the Privacy & policy
                {/* <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg> */}
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <AiOutlineWallet className="text-4xl text-orange-500" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              Connect your wallet
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Quick fast and easy
            </p>
          </div>
          <div>
            <AiOutlineSelect className="text-4xl text-orange-500" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              Select your wager amount
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Pick a $1, $5, or $10 dollar bet
            </p>
          </div>
          <div>
            <ImCoinDollar className="text-4xl text-orange-500" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              Make your selections
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Pick one winner from each of the seven selections
            </p>
          </div>
          <div>
            <FaBoxes className="text-4xl text-orange-500" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              Submit Parlay
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Click submit parlay and root on your teams!
            </p>
          </div>

          <div>
            <GiToken className="text-4xl text-orange-500" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              Receive your Solana
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Hit all seven picks and receive your 100/1 odds on whatever price
              you play!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustHome;
