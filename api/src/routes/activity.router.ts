import { Router } from 'express';
import * as activityController from '../controllers/activity.controller';

export const activityRouter = Router();

activityRouter.post('/', activityController.getActivities);
activityRouter.get('/:id', activityController.getActivity);
activityRouter.post('/create', activityController.createActivity);
