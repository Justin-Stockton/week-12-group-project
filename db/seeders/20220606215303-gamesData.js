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
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1641233427",
          description:
            "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Among Us",
          tags: "casual",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg?t=1646296970",
          description:
            "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Halo",
          tags: "fps",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/976730/header.jpg?t=1649955774",
          description:
            "The Master Chief’s iconic journey includes six games, built for PC and collected in a single integrated experience. Whether you’re a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stray",
          tags: "Adventure",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/header.jpg?t=1654392401",
          description:
            "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity and find their way home.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sea of Thieves",
          tags: "Pirates",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg?t=1653607222",
          description:
            "Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right. With no set roles, you have complete freedom to approach the world, and other players, however you choose.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Elden Ring",
          tags: "RPG",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1654259241",
          description:
            "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "V Rising",
          tags: "Survival",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1604030/header.jpg?t=1653053023",
          description:
            "Awaken as a vampire. Hunt for blood in nearby settlements to regain your strength and evade the scorching sun to survive. Raise your castle and thrive in an ever-changing open world full of mystery. Gain allies online and conquer the land of the living.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apex Legends",
          tags: "Battle Royale",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1653320846",
          description:
            "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "FINAL FANTASY XIV Online",
          tags: "MMO",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/39210/header.jpg?t=1646695302",
          description:
            "Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beat Saber",
          tags: "Rhythm",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/620980/header.jpg?t=1622461922",
          description:
            "Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music as they fly towards you, surrounded by a futuristic world.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plants vs. Zombies GOTY Edition",
          tags: "Tower Defense",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/3590/header.jpg?t=1615390608",
          description:
            "Zombies are invading your home, and the only defense is your arsenal of plants! Armed with an alien nursery-worth of zombie-zapping plants like peashooters and cherry bombs, you'll need to think fast and plant faster to stop dozens of types of zombies dead in their tracks.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Sims™ 3",
          tags: "Life Sim",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/47890/header.jpg?t=1615894474",
          description:
            "The Sims 3: Create the perfect world with full customization at your fingertips. Refine personalities and help fulfill destinies.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stardew Valley",
          tags: "Farming Sim",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg?t=1608624324",
          description:
            "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Terraria",
          tags: "Sandbox",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1590092560",
          description:
            "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Elder Scrolls V: Skyrim Special Edition",
          tags: "RPG",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg?t=1650909796",
          description:
            "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ARK: Survival Evolved",
          tags: "Open World",
          gameImage:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg?t=1649288168",
          description:
            "Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape!",
          createdAt: new Date(),
          updatedAt: new Date(),
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
