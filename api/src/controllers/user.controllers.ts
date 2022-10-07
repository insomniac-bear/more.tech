import { findUser } from '../services/user.service';
import { User } from '../models';
import { NextFunction, Request, Response } from 'express';

export const getUserByUuid = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { uuid } = req.params;

    const user = await findUser('uuid', uuid);

    if (!user) {
      return res
        .status(404)
        .json({
          status: 'failed',
          user: undefined,
        });
    }

    return res
      .status(200)
      .json({
        status: 'success',
        user,
      });
  } catch (err: any) {
    throw new Error()
  }
}

export const getUsers = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (err: any) {
    throw new Error(err.message)
  }
}
