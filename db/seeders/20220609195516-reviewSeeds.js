'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [{
     review: 'This game is the best game ever!',
     userId: 1,
     gameId: 3,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    review: 'I hate this game and I am never playing it again!',
    userId: 2,
    gameId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'I quit my job and stopped eating, all I do is play! Lets go!',
    userId: 3,
    gameId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'This game is cool but left me wanting more. I wish the game devs took more time to development more of a story line. YEAHHHH BOOOYYY',
    userId: 1,
    gameId: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'No comment cause I hate doing reviews',
    userId: 1,
    gameId: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'I am going to leave a stupid review so I feel better about my life',
    userId: 4,
    gameId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'Somewhere over the rainbow, wayyyy up high',
    userId: 2,
    gameId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'This is the last review I am going to write',
    userId: 3,
    gameId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
