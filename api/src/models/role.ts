import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { RoleAttributes } from './utils/role.type'

export class Role extends Model<RoleAttributes> {
  declare id: number;
  declare name: 'user' | 'hr' | 'admin' | 'chief';
}

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
