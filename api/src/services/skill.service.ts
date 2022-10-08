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
