import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { ImMenu } from "react-icons/im";
import Image from "next/image";
import wallet from "../public/images/Phantom.png";

// Solana
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(!false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <MoonIcon className="text-blue-500 w-5 h-5" />
      ) : (
        <SunIcon className="text-blue-400 w-5 h-5" />
      )}
    </button>
  );
};

export default function Header() {
  const walletConn = useWallet();
  const [navbar, setNavbar] = useState(false);
  const navbarHandel = () => {
    setNavbar(!navbar);
  };
  const navLinks = [
    { id: "/", title: "Parlay Or Bust" },
    { id: "/Games", title: "Daily Pick Em Contest" },
    {
      id: "#",
      title: "Buy A Focus 5 NFT",
    },
    // { id: "/winTeams", title: "Win Teams" },
    { id: "#", title: "About Us" },
  ];
  return (
    <header className="fixed w-full  ">
      <nav className="bg-orange-50 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link href="#">
            <a className="flex items-center">
              <img
                src="./images/logo.png"
                className="h-[50px] mr-3 sm:h-[80px]"
                alt="Landwind Logo"
              />
              {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Focus5
              </span> */}
            </a>
          </Link>
          <div className="flex gap-2 items-center lg:order-2">
            <ThemeToggler />
            {/* <!-- <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> --> */}

            {!walletConn.publicKey ? (
              <WalletMultiButton className="">
                <a
                  className="text-white bg-orange-500 hover:bg-purple-800 
              focus:ring-2 focus:ring-purple-300 font-medium
               rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5
                sm:mr-2 lg:mr-0
                 dark:bg-orange-500 dark:hover:bg-purple-700
                  focus:outline-none dark:focus:ring-gray-200
                  flex  justify-center items-center gap-1
                  "
                >
                  <Image src={wallet} width={30} height={30} /> Connect Wallet
                </a>
              </WalletMultiButton>
            ) : (
              <WalletMultiButton className="">
                <a
                  className="text-white bg-orange-500 hover:bg-purple-800 
            focus:ring-2 focus:ring-purple-300 font-medium
             rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5
              sm:mr-2 lg:mr-0
               dark:bg-orange-500 dark:hover:bg-purple-700
                focus:outline-none dark:focus:ring-gray-200
                flex  justify-center items-center gap-1 z-[1]
                "
                >
                  Change or Disconnect Wallet
                </a>
              </WalletMultiButton>
            )}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <ImMenu onClick={navbarHandel} />
            </button>
          </div>

          <div
            className={`items-center justify-between 
            ${navbar ? "inline" : "hidden"}
            w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.map((nav, index) =>
                nav.title === "Buy A Focus 5 NFT" ? (
                  <li key={nav.id}>
                    <div className="dropdown inline-block relative">
                      <button className=" lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">{nav.title}</span>
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg>
                      </button>
                      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className="">
                          <Link href="http://Magiceden.io/marketplace/focus5">
                            <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                              Focus5NFTs
                            </a>
                          </Link>
                        </li>
                        <li className="">
                          <Link href="#">
                            <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                              Parlay or Bust NFTs
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* drowpdown */}
                  </li>
                ) : (
                  <li key={nav.id}>
                    <Link href={nav.id}>
                      <a
                        className="block py-2 pl-3 pr-4 md:border-none  border-b-2  rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white"
                        aria-current="page"
                      >
                        {nav.title}
                      </a>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
