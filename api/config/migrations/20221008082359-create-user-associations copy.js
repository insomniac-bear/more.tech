'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('activities', 'departmentId', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'departments',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
  })
    .then(() => {
      return queryInterface.addColumn('activities', 'userUuid', {
            type: Sequelize.DataTypes.UUID,
            references: {
              model: 'users',
              key: 'uuid',
            },
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
