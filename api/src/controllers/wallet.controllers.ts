import { NextFunction, Request, Response } from 'express';
import { getDepartmentById } from '../services/department.service';
import { updateSkill } from '../services/skill.service';
import * as walletService from '../services/wallet.service';

type TRespectTransaction = {
  userUuid: string, toPublicKey: string, amount: number, skillType: 'hard' | 'soft'
};

export const sendRespect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userUuid, toPublicKey, amount, skillType }: TRespectTransaction = req.body;

    const wallet = await walletService.findWallet('userUuid', userUuid);

    const recipientsWallet = await walletService.findWallet('publicKey', toPublicKey);

    const hash = new Promise((resolve, reject) => {
      const hash = walletService.executeTransactionDR(wallet && wallet.privateKey, toPublicKey, amount);
      resolve(hash);
      reject(new Error('Ошибка перевода'))
    })
    .then((hash) => {
        updateSkill(recipientsWallet?.userUuid, skillType, amount);
        return hash;
    })
    .then((hash) => {
      updateSkill(userUuid, skillType, amount);
      return hash;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
    return res
      .status(200)
      .json({
        status: 'success',
      });
  } catch(err: any) {
    next(err);
  }
};

type TCheckActivityData = {
  recipientUuid: string,
  authorUuid: string,
  profit: number,
  departmentId: number,
  type: 'hard' | 'soft'
};

export const checkActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      recipientUuid,
      authorUuid,
      profit,
      departmentId,
      type,
    }: TCheckActivityData = req.body;

    const department = await getDepartmentById(departmentId);
    const walletType = department && department.name === 'HR' ? 'hr' : 'chief';

    const publicWallet = await walletService.findPublicWallet('userUuid', authorUuid, walletType);
    const recipientsWallet = await walletService.findWallet('userUuid', recipientUuid);

    const hash = new Promise((resolve, reject) => {
      const hash = walletService.executeTransactionDR(publicWallet && publicWallet.privateKey, recipientsWallet && recipientsWallet.publicKey, profit);
      resolve(hash);
      reject(new Error('Ошибка перевода'))
    })
    .then((hash) => {
        updateSkill(recipientUuid, type, profit);
        return hash;
    })
    .then((hash) => {
      updateSkill(authorUuid, type, profit);
      return hash;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
    return res
      .status(200)
      .json({
        status: 'success',
      });
  } catch(err: any) {
    next(err);
  }
}
