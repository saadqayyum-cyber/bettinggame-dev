import Format from "../layout/format";
import Trust from "../components/Trust";
import { FaWallet } from "react-icons/fa";

import Winteams from "../components/Winteams";
export default function yourSelectedTeams() {
  const winGames = [
    {
      _id: "1",
      name: "Match of Finx and Aeth",
      slug: "game-shirt",
      teamName1: "Chennai Super Kings",
      teamName2: "Munbai Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      winTeamName: "Chennai Super Kings",
      matchDate: "278446456",
    },

    {
      _id: "2",
      name: "Match of Finx and Aeth",
      slug: "game-match",
      teamName1: "Pakistan kings",
      teamName2: "India kings",
      team1Image: "/images/game2.png",
      team2Image: "/images/game1.png",
      winTeamName: "India kings",
      matchDate: "278446456",
    },

    {
      _id: "3",
      name: "Match of Finx and Aeth",
      slug: "kalkata-Dehli",
      teamName1: "kalkata Super Kings",
      teamName2: "Dehli Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      winTeamName: "kalkata Super Kings",
      matchDate: "278446456",
    },
  ];

  return (
    <Format>
      <div className="p-10 ">
        <h1 className=" mt-[5rem] text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Your Submited Bets
        </h1>

        <div
          className="border flex flex-row items-center gap-2 justify-center 
        p-2 md:w-[40%] text-center rounded-full mb-10 mx-auto"
        >
          <FaWallet />
          <span className="text-orange-500">
            Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB
          </span>
        </div>
        {/* <h3 className="mb-5 text-center text-lg font-medium text-gray-900 dark:text-white">
          Select your Favorite 12 team which you think will win.
        </h3> */}
        <form>
          {winGames.map((product) => (
            <Winteams product={product} key={product.slug}></Winteams>
          ))}
        </form>
        <div className="text-center"></div>
      </div>
      <Trust></Trust>
    </Format>
  );
}
