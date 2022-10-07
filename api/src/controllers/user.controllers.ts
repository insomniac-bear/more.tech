import { User } from '../models';

export const getUsers = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (err: any) {
    throw new Error(err.message)
  }
}
