import Image from "next/image";
import banner from "../public/images/hero6.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdOutlineSocialDistance } from "react-icons/md";

import Link from "next/link";
const Hero = () => {
  return (
    <section className="bg-orange-50 dark:bg-gray-900 p-5">
      <div className="flex-col-reverse grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            <span className="text-orange-500 custheading">Parlay</span> or
            <span className="text-blue-500 custheading">Bust</span> <br />
            {/* <span className="text-blue-500">100x your money.</span> */}
          </h1>
          <p className="  max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Play at parlayorbust.com where we give you better odds than any
            Sportsbook! Every day we will have 7 games to choose from. Pick a
            winner from each game and if you hit all 7 you win 100x your bet!
            Bet $1, $5, $10 converted in Solana!
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link href="#">
              <a className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg bg-orange-500 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <AiFillPlayCircle className="mr-1" /> Play now
              </a>
            </Link>
            <Link href="http://Discord.gg/focus5sports">
              <a
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <MdOutlineSocialDistance className="mr-1" /> Join our Community
              </a>
            </Link>
          </div>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 dark:z-[1] lg:flex ">
          <Image src={banner} alt="hero image" />
        </div>
      </div>
      <div className="hidden dark:inline">
        <div className="pink__gradient"></div>
        <div className="white__gradient "></div>
        <div className="blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
