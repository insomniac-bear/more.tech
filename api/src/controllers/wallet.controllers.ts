import { NextFunction, Request, Response } from 'express';
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
        hash,
      });
  } catch(err: any) {
    throw new Error(err.message);
  }
}
