import { findUser, createUser } from '../services/user.service';
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
    const users = await User.findAll({
      include: { all: true }
    });

    return res
      .status(200)
      .json({
        status: 'success',
        users: users.map((user) => createUserRespons(user)),
      });
  } catch (err: any) {
    next(err);
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    const candidate = await findUser('email', email);


    if (!candidate) {
      res
        .status(404)
        .json({
          status: 'failed',
          user: {},
        });
    }

    return res
        .status(200)
        .json({
          status: 'success',
          user: createUserRespons(candidate)
        });
  } catch (err) {
    next(err);
  }
}

export const registrationUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, surname, patronymic, email, phone, departmentId, positionId, roleId, avatar } = req.body;

    const candidate = await findUser('email', email);

    if (candidate) {
      return res
        .status(404)
        .json({
          status: 'failed',
          user: {
            message: 'User already exist'
          }
        })
    }

    await createUser({ name, surname, patronymic, email, phone, avatar, departmentId, positionId, roleId }, 'self', 'user');

    return res
      .status(200)
      .json({
        status: 'success',
      });
  } catch(err) {
    next(err);
  }
}

export const registrationChief = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, surname, patronymic, email, phone, departmentId, positionId, roleId, avatar } = req.body;

    const candidate = await findUser('email', email);

    if (candidate) {
      return res
        .status(404)
        .json({
          status: 'failed',
          user: {
            message: 'User already exist'
          }
        })
    }

    await createUser({ name, surname, patronymic, email, phone, avatar, departmentId, positionId, roleId }, 'chief', 'chief');

    return res
      .status(200)
      .json({
        status: 'success',
      });
  } catch(err) {
    next(err);
  }
}

export const registrationHr = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, surname, patronymic, email, phone, departmentId, positionId, roleId, avatar } = req.body;

    const candidate = await findUser('email', email);

    if (candidate) {
      return res
        .status(404)
        .json({
          status: 'failed',
          user: {
            message: 'User already exist'
          }
        })
    }

    await createUser({ name, surname, patronymic, email, phone, avatar, departmentId, positionId, roleId }, 'hr', 'hr');

    return res
      .status(200)
      .json({
        status: 'success',
      });
  } catch(err) {
    next(err);
  }
}
