import GameCard from "./GameCard";
import { useEffect, useState } from "react";
import Modal from "./Modal";
const GameList = () => {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const sendRequest = () => {
    fetch("api/games")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const handleCallback = (childData) => {
    setName(childData);
    console.log(name);
  };
  return (
    <div className="p-10 ">
      <h1 className="  text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
        Bet on Games
      </h1>
      <h3 className="mb-5 text-center text-lg font-medium text-gray-900 dark:text-white">
        Select your Favorite team which you think will win.
      </h3>

      <form>
        {data &&
          data.map((item, index) => (
            <GameCard
              parentCallback={handleCallback}
              key={index}
              title={item.title}
              date={item.date}
              team1Name={item.team1Name}
              team2Name={item.team2Name}
              team1ImgUrl={item.team1ImgUrl}
              team2ImgUrl={item.team2ImgUrl}
              label={item.label}
            />
          ))}
      </form>
      <div className="text-center">
        <Modal />
      </div>
    </div>
  );
};

export default GameList;
