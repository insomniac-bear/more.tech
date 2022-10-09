'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('departments', [
      {
        name: 'Администратор',
      },
      {
        name: 'HR',
      },
      {
        name: 'IT',
      },
      {
        name: 'Правовой департамент'
      },
      {
        name: 'Бухгалтерия'
      },
      {
        name: 'Финансовый отдел'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('departments', null, {});
  }
};
