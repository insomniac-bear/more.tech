import { Department } from './department';
import { Role } from './role';
import { Skill } from './skill';
import { User } from './user';
import { Wallet } from './wallet';
import { Position } from './position';

Department.hasOne(User, {
  foreignKey: {
    name: 'departmentId'
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
User.belongsTo(Department);

Position.hasOne(User, {
  foreignKey: 'positionId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
User.belongsTo(Position);

Role.hasMany(User, {
  foreignKey: {
    name: 'roleId'
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
User.belongsTo(Role);

User.hasMany(Wallet, {
  foreignKey: 'userUuid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Wallet.belongsTo(User);

User.hasMany(Skill, {
  foreignKey: 'userUuid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Skill.belongsTo(User);

export {
  Department,
  Role,
  Skill,
  User,
  Wallet,
  Position,
};
