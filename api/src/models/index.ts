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

User.hasOne(Wallet, {
  foreignKey: 'userUuid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Wallet.belongsTo(User);

Skill.belongsToMany(User, { through: 'users_skills' });
User.belongsToMany(Skill, { through: 'users_skills' });

export {
  Department,
  Role,
  Skill,
  User,
  Wallet,
  Position,
};
