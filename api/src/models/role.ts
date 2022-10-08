import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class Role extends Model {}

Role.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.ENUM('user', 'hr', 'admin', 'chief'),
    defaultValue: 'user',
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'roles',
  timestamps: false,
});
