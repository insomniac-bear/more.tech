import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class Skill extends Model {}

Skill.init({
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
}, {
  sequelize,
  tableName: 'skills',
  timestamps: false,
});
