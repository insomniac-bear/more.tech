import { Router } from 'express';
import * as walletController from '../controllers/wallet.controllers';

export const walletRouter = Router();

walletRouter.post('/respect', walletController.sendRespect);
