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
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
        departmentId: departmentsId[0].id,
        positionId: positionsId[0].id,
        roleId: rolesId[0].id,
      },
      // {
      //   uuid: uuidv4(),
      //   name: 'Софья',
      //   surname: 'Романова',
      //   patronymic: 'Михайловна',
      //   email: 'hr@test.com',
      //   password: 'qwerty1234',
      //   phone: 1111111111,
      //   avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      //   departmentId: departmentsId[1].id,
      //   positionId: positionsId[2].id,
      //   roleId: rolesId[1].id,
      // },
      // {
      //   uuid: uuidv4(),
      //   name: 'Иван',
      //   surname: 'Рюриков',
      //   patronymic: 'Васильевич',
      //   email: 'it@test.com',
      //   password: 'qwerty1234',
      //   phone: 1111111111,
      //   avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      //   departmentId: departmentsId[2].id,
      //   positionId: positionsId[4].id,
      //   roleId: rolesId[2].id,
      // },
      // {
      //   uuid: uuidv4(),
      //   name: 'Петр',
      //   surname: 'Романов',
      //   patronymic: 'Алексеевич',
      //   email: 'test@test.com',
      //   password: 'qwerty1234',
      //   phone: 1111111111,
      //   avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      //   departmentId: departmentsId[2].id,
      //   positionId: positionsId[2].id,
      //   roleId: rolesId[3].id,
      // },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
