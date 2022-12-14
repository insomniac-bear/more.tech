import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import { UserAttributes } from './utils/user.type';

export class User extends Model<UserAttributes> {
  declare uuid?: string;
  declare name: string;
  declare surname: string;
  declare patronymic: string;
  declare email: string;
  declare password: string;
  declare phone: number;
  declare avatar?: string;
  declare departmentId?: number | null;
  declare positionId?: number | null;
  declare roleId?: number | null;
}

User.init({
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
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
  email: {
    type: DataTypes.STRING(256),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING(500),
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false,
})
