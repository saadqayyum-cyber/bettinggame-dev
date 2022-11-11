import Format from "../layout/format";
import Trust from "../components/Trust";
import GameCard from "../components/GameCard";
import Winteams from "../components/Winteams";
export default function winTeams() {
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

    {
      _id: "4",
      name: "Match of Finx and Aeth",
      slug: "royal-ragistan",
      teamName1: "Royal Super Kings",
      teamName2: "Ragistan Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      winTeamName: "Ragistan Indians",
      matchDate: "878446456",
    },

    {
      _id: "5",
      name: "Match of Finx and Aeth",
      slug: "multan-karanchi",
      teamName1: "Multan Super Kings",
      teamName2: "Karanchi Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      winTeamName: "Multan Super Kings",
      matchDate: "278446456",
    },
    {
      _id: "6",
      name: "Match of Finx and Aeth",
      slug: "lahore-yopi",
      teamName1: "Lahore Super Kings",
      teamName2: "Yopi Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      winTeamName: "Yopi Indians",
      matchDate: "278446456",
    },
  ];

  return (
    <Format>
      <div className="p-10 ">
        <h1 className=" mt-[5rem] text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Winning Teams
        </h1>
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
