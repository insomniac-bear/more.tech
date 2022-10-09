import { Position } from '../models';

export const getAllPositions = async () => {
  try {
    return await Position.findAll();
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export const getPositionById = async (id: number) => {
  try {
    return await Position.findByPk(id);
  } catch (err: any) {
    throw new Error(err.message)
  }
}
