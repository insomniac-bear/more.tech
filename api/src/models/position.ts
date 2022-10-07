import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Position extends Model {}

Position.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Position',
});