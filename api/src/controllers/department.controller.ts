import { NextFunction, Request, Response } from 'express';
import * as departmentService from '../services/department.service';


export const getDepartments = async (req: Request, res: Response, next: NextFunction) => {
  try {

    return res
      .status(200)
      .json({
        status: 'success',
        departments: await departmentService.getAllDepartments(),
      });
  } catch (err: any) {
    next(err);
  }
}