import { findUser } from '../services/user.service';
import { User } from '../models';
import { NextFunction, Request, Response } from 'express';
import { createUserRespons } from './dto/user.dto';

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
        user: createUserRespons(user),
      });
  } catch (err: any) {
    next(err);
  }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll();

    return res
      .status(200)
      .json({
        status: 'success',
        users,
      });
  } catch (err: any) {
    next(err);
  }
}
