'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('positions', [
      {
        name: 'Администратор',
      },
      {
        name: 'Специалист',
      },
      {
        name: 'Главный Специалист',
      },
      {
        name: 'Стажер',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
