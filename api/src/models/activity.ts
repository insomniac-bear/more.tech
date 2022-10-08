import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { ActivityAttributes } from './utils/activity.type';

export class Activity extends Model<ActivityAttributes> {
  declare id?: number;
  declare title: string;
  declare type: 'hard' | 'soft';
  declare profit: number;
  declare description: string;
  declare authorUuid?: string;
  declare departmentId?: number;
}

Activity.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('hard', 'soft'),
    allowNull: false,
  },
  profit: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'activities',
  timestamps: false,
})
