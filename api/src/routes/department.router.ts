import { Router } from 'express';
import * as departmentController from '../controllers/department.controller';

export const departmentRouter = Router();

departmentRouter.get('/', departmentController.getDepartments);
