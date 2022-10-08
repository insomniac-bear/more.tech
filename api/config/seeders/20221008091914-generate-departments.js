'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('departments', [
      {
        name: 'Администратор',
      },
      {
        name: 'Отдел кадров',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('departments', null, {});
  }
};
