'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { DataTypes } = Sequelize;
    return await queryInterface.createTable('skills', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.ENUM('hard', 'soft'),
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      period: {
        type: DataTypes.ENUM('last', 'current'),
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('skills');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
