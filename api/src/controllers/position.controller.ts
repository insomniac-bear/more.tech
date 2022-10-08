import { NextFunction, Request, Response } from 'express';
import * as positionService from '../services/position.service';


export const getPositions = async (req: Request, res: Response, next: NextFunction) => {
  try {

    return res
      .status(200)
      .json({
        status: 'success',
        positions: await positionService.getAllPositions(),
      });
  } catch (err: any) {
    next(err);
  }
}