import Link from "next/link";
import { ImTwitter } from "react-icons/im";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
export default function footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="text-center">
          <Link href="#">
            <a className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
              <img
                src="./images/logo.png"
                className="mr-3 h-[100px]"
                alt="Landwind Logo"
              />
            </a>
          </Link>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2021-2022 Focus5. All Rights Reserved. Developed by
            <Link href="#">
              <a
                target="_blank"
                className="text-orange-600 hover:underline dark:text-orange-500"
              >
                Amir Ali
              </a>
            </Link>
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <Link href="http://Magiceden.io/marketplace/focus5">
                <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <AiOutlineGlobal />
                </a>
              </Link>
            </li>
            <li>
              <Link href="http://Discord.gg/focus5sports">
                <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <BsDiscord />
                </a>
              </Link>
            </li>
            <li>
              <Link href="http://Twitter.com/focus5sports">
                <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <ImTwitter />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
