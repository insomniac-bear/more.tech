'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [
      {
        name: 'admin'
      },
      {
        name: 'hr'
      },
      {
        name: 'chief'
      },
      {
        name: 'user'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
