import { User } from '../models';
import { getDepartmentById } from './department.service';
import { getPositionById } from './position.service';
import { getRoleById } from './role.service';
import { createSkill } from './skill.service';

export const findUser = async (param: string, value: string) => {
  try {
    if (param === 'uuid') {
      return await User.findByPk(value, {
        include: {
          all: true,
        }
      });
    }

    return await User.findOne({ where: {
      [param]: value,
    },
    include: {
      all: true,
    }
  });

  } catch (err: any) {
    throw new Error(err.message);
  }
}

export const createUser = async (data: any) => {
  const { name, surname, patronymic, email, phone, departmentId, positionId, roleId } = data;

  const department = await getDepartmentById(departmentId);
  const role = await getRoleById(roleId);
  const position = await getPositionById(positionId);

  const newUser = await User.create({
    name,
    surname,
    patronymic,
    email,
    password: 'qwerty',
    phone,
    departmentId: department && department.id,
    positionId: position && position.id,
    roleId: role && role.id,
  });

  const hardSkill = newUser.uuid && await createSkill(newUser.uuid, 'hard', 'current');
  const softSkill = newUser.uuid && await createSkill(newUser.uuid, 'soft', 'current');

}
