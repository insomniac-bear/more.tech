import { Role } from '../models';

export const getAllRoles = async () => {
  try {
    return await Role.findAll();
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export const getRoleById = async (id: number) => {
  try {
    return await Role.findByPk(id);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
