import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

export class User extends Model {}

User.init({
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4(),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  patronymic: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'user'
})