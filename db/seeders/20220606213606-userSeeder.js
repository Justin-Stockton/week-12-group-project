'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [{
     firstName: 'John',
     lastName: 'Doe',
     username: 'JohnD',
     email: 'john.doe@gmail.com',
     password: 'longpassword',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    firstName: 'Charles',
    lastName: 'Ham',
    username: 'CHammer',
    email: 'charles.ham@gmail.com',
    password: 'shortpassword',
    createdAt: new Date(),
     updatedAt: new Date()
  },
  {
    firstName: 'Batman',
    lastName: 'Bat',
    username: 'DarkNight',
    email: 'batman.bat@gmail.com',
    password: 'batpassword',
    createdAt: new Date(),
     updatedAt: new Date()
  },
  {
    firstName: 'Demo',
    lastName: 'User',
    username: 'DemoUser',
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
