import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { PositionAttributes } from './utils/position.type';

export class Position extends Model<PositionAttributes> {}

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
  modelName: 'positions',
  timestamps: false,
});