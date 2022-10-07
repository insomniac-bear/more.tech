import { NextFunction, Request, Response, Router } from 'express';
import * as userController from '../controllers/user.controllers';

export const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userController.getUsers();
    return res
      .status(200)
      .json({
        status: 'success',
        users,
      });
  } catch (err) {
    next(err);
  }
});
