"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Games",
      [
        {
          name: "CS:GO",
          tags: "fps",
          gameImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1641233427",
          description: "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Among Us",
          tags: "casual",
          gameImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg?t=1646296970",
          description: "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Halo",
          tags: "fps",
          gameImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/976730/header.jpg?t=1649955774",
          description: "The Master Chief’s iconic journey includes six games, built for PC and collected in a single integrated experience. Whether you’re a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Stray",
          tags: "Adventure",
          gameImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/header.jpg?t=1654392401",
          description: "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity and find their way home.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sea of Thieves",
          tags: "Pirates",
          gameImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg?t=1653607222",
          description: "Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right. With no set roles, you have complete freedom to approach the world, and other players, however you choose.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Games", null, {});
  },
};
