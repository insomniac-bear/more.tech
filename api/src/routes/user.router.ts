import { Router } from 'express';
import * as userController from '../controllers/user.controllers';

export const userRouter = Router();

userRouter.get('/:uuid', userController.getUserByUuid);
userRouter.get('/', userController.getUsers);
userRouter.post('/auth', userController.auth);
userRouter.post('/registration-user', userController.registrationUser);
userRouter.post('/registration-chief', userController.registrationChief);
userRouter.post('/registration-hr', userController.registrationHr);
