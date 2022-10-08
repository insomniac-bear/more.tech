'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      'SELECT uuid from USERS;'
    );

    const usersId = users[0];

    return queryInterface.bulkInsert('skills', [
      {
        type: 'hard',
        value: 100,
        period: 'current',
        userUuid: usersId[0].uuid,
      },
      {
        type: 'soft',
        value: 100,
        period: 'current',
        userUuid: usersId[0].uuid,
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
