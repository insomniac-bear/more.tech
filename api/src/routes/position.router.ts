import { Router } from 'express';
import * as positionController from '../controllers/position.controller';

export const positionRouter = Router();

positionRouter.get('/', positionController.getPositions);
