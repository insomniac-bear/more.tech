import { Department } from '../models';

export const getAllDepartments = async () => {
  try {
    return await Department.findAll();
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export const getDepartmentById = async (id: number) => {
  try {
    return await Department.findByPk(id);
  } catch (err: any) {
    throw new Error(err.message)
  }
}
