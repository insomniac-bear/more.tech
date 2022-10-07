import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class Position extends Model {}

Position.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'position',
});