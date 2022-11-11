import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "admin",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Match of Finx and Aeth",
      slug: "game-shirt",
      teamName1: "Chennai Super Kings",
      teamName2: "Munbai Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      matchDate: "278446456",
    },
    {
      name: "Match of Finx and Aeth",
      slug: "game-match",
      teamName1: "Pakistan kings",
      teamName2: "India kings",
      team1Image: "/images/game2.png",
      team2Image: "/images/game1.png",
      matchDate: "278446456",
    },
    {
      name: "Match of Finx and Aeth",
      slug: "kalkata-Dehli",
      teamName1: "kalkata Super Kings",
      teamName2: "Dehli Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      matchDate: "278446456",
    },
    {
      name: "Match of Finx and Aeth",
      slug: "royal-ragistan",
      teamName1: "Royal Super Kings",
      teamName2: "Ragistan Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      matchDate: "878446456",
    },
    {
      name: "Match of Finx and Aeth",
      slug: "multan-karanchi",
      teamName1: "Multan Super Kings",
      teamName2: "Karanchi Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      matchDate: "278446456",
    },
    {
      name: "Match of Finx and Aeth",
      slug: "lahore-yopi",
      teamName1: "Lahore Super Kings",
      teamName2: "Yopi Indians",
      team1Image: "/images/game1.png",
      team2Image: "/images/game2.png",
      matchDate: "278446456",
    },
  ],
};

export default data;
