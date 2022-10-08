'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles = await queryInterface.sequelize.query(
      'SELECT id from ROLES;'
    );
    const departments =  await queryInterface.sequelize.query(
      'SELECT id from DEPARTMENTS;'
    );
    const positions =  await queryInterface.sequelize.query(
      'SELECT id from POSITIONS;'
    );

    const rolesId = roles[0];
    const departmentsId = departments[0];
    const positionsId = positions[0];

    return queryInterface.bulkInsert('users', [
      {
        uuid: uuidv4(),
        name: 'Иван',
        surname: 'Админов',
        patronymic: 'Админович',
        email: 'admin@test.com',
        password: 'qwerty1234',
        phone: 1111111111,
        departmentId: departmentsId[0].id,
        positionId: positionsId[0].id,
        roleId: rolesId[0].id,
      }
    ]);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
