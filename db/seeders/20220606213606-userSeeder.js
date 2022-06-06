'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [{
     username: 'John Doe',
     email: 'john.doe@gmail.com',
     password: 'longpassword',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    username: 'Charles Ham',
    email: 'charles.ham@gmail.com',
    password: 'shortpassword',
    createdAt: new Date(),
     updatedAt: new Date()
  },
  {
    username: 'Batman Bat',
    email: 'batman.bat@gmail.com',
    password: 'batpassword',
    createdAt: new Date(),
     updatedAt: new Date()
  },
  {
    username: 'Demo User',
    email: 'demouser@demo.com',
    password: 'demopassword',
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
