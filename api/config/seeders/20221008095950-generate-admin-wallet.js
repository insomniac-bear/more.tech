'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      'SELECT uuid from USERS;'
    );

    const usersId = users[0];

    return queryInterface.bulkInsert('wallets', [
      {
        publicKey: '0x79d1d20256334326842D05D08707D7a9041BCd95',
        privateKey: '7ff36787c08bb74217cd61e666b4dd3b3d8c2e2fe7a5d1fd9bbef3ebc12fd53c',
        type: 'corporate',
        userUuid: usersId[0].uuid
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('wallets', null, {});
  }
};
