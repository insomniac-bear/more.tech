import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { DepartmentAttributes } from './utils/department.type';

export class Department extends Model<DepartmentAttributes> {
  declare id: number;
  declare name: string;
}

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
