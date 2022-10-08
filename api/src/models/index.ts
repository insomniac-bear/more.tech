import { Activity } from './activity';
import { Department } from './department';
import { Position } from './position';
import { Role } from './role';
import { Skill } from './skill';
import { User } from './user';
import { Wallet } from './wallet';

Department.hasOne(User, {
  foreignKey: {
    name: 'departmentId'
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
User.belongsTo(Department);

Department.hasMany(Activity, {
  foreignKey: 'departmentId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Activity.belongsTo(Department);

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

User.hasMany(Activity, {
  foreignKey: 'authorUuid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Activity.belongsTo(User);

export {
  Activity,
  Department,
  Position,
  Role,
  Skill,
  User,
  Wallet,
};
