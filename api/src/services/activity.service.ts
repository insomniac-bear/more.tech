import { Op } from 'sequelize';
import { Activity } from '../models';
import { getDepartmentByName } from './department.service';
import { findUser } from './user.service';

/**
 * Создание активности
 */
type TCreateActivity = {
  title: string,
  type: 'hard' | 'soft',
  profit: number,
  description: string,
  authorUuid: string,
  departmentId: number,
};

export const createActivity = async (data: TCreateActivity) => {
  try {
    return await Activity.create(data);
  } catch (err: any) {
    throw new Error(err.message);
  }
};

/**
 * Поиск всех доступных пользователю активностей
 */
export const getAllActivity = async (userUuid: string) => {
  try {
    const user = await findUser('uuid', userUuid);
    const departmentId = user?.departmentId;
    const hrDepartment = await getDepartmentByName('HR');

    return departmentId ? await Activity.findAll({
      where: {
        [Op.or]: [
          {
            departmentId
          },
          {
            departmentId: hrDepartment?.id
          }
        ]
      }
    }) : undefined;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

/**
 * Получение активности по id
 */

export const getActivity = async (id: number) => {
  try {
    return await Activity.findByPk(id);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
