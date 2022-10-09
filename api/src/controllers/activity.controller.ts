import { NextFunction, Request, Response } from 'express';
import { Activity } from '../models';
import * as activityService from '../services/activity.service';

type TCreateActivityData = {
  title: string,
  type: 'hard' | 'soft',
  profit: number,
  description: string,
  authorUuid: string,
  departmentId: number,
};

export const createActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: TCreateActivityData = req.body;
    const activity = await activityService.createActivity(data);

    return res
      .status(200)
      .json({
        status: 'success',
        activity,
      });
  } catch (err: any) {
    next(err);
  }
};

export const getActivities = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userUuid }: { userUuid: string } = req.body;
    const activities = await activityService.getAllActivity(userUuid);

    if (!activities) {
      return res
        .status(404)
        .json({
          status: 'failed',
          message: 'Not found'
        });
    }

    return res
      .status(200)
      .json({
        status: 'success',
        activities,
      })
  } catch (err: any) {
    next(err);
  }
};

export const getActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    return res
      .status(200)
      .json({
        status: 'success',
        activity: await activityService.getActivity(Number(id)),
      });
  } catch (err: any) {
    next(err);
  }
}
