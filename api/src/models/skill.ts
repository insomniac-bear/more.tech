import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { SkillAttributes } from './utils/skill.type';

export class Skill extends Model<SkillAttributes> {
  declare id?: number;
  declare type: 'hard' | 'soft';
  declare value: number;
  declare period: 'current' | 'last';
  declare userUuid?: string;
}

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
