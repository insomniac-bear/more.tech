'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('users', 'departmentId', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'departments',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
  })
      .then(() => {
        return queryInterface.addColumn('users', 'positionId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'positions',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      })
      })
      .then(() => {
        return queryInterface.addColumn('users', 'roleId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'roles',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      })
      })
      .then(() => {
        return queryInterface.addColumn('wallets', 'userUuid', {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: 'users',
            key: 'uuid',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      })
      })
      .then(() => {
        return queryInterface.addColumn('skills', 'userUuid', {
            type: Sequelize.DataTypes.UUID,
            references: { model: 'users', key: 'uuid' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        })
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
