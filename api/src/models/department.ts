import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class Department extends Model {}

Department.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(256),
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'departments',
  timestamps: false,
});
