import { Op } from 'sequelize';
import { Skill } from '../models';

export const getUsersSkills = async (userUuid: string) => {
  try {
    return await Skill.findAll({ where: {
      userUuid,
    }});
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export const createSkill = async (userUuid: string, type: 'hard' | 'soft', period: 'current' | 'last') => {
  return await Skill.create({
    type,
    value: 0,
    period,
    userUuid,
  });
}

export const updateSkill = async (userUuid: string | undefined, type: 'hard' | 'soft', amount: number) => {
  try {
    const skill = await Skill.findOne({ where: {
      userUuid,
    }});
    if (skill) {
      return await Skill.update({
        value: skill?.value + amount
      }, {
        where: {
          [Op.and]: [{ type }, { userUuid }]
        }
      });
    } else {
      throw new Error('User not found');
    }
  } catch (err: any) {
    throw new Error (err.message);
  }
}
