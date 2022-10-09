import axios from 'axios';
import { Op } from 'sequelize';
import { Wallet } from '../models';

const BASE_WALLET_URL = 'https://hackathon.lsp.team/hk';
/**
 * Создание кошелька
 */
type TWalletData = {
  privateKey: string,
  publicKey: string,
};

export const createWallet = async () => {
  try {
    const { data }: { data: TWalletData } = await axios.post(`${BASE_WALLET_URL}/v1/wallets/new`, {
      headers: {
        "Content-Type": "application/json",
        "Connection": "keep-alive",
        "Accept": "*/*"
      },
      data: {}
    });

    return data;
  } catch(err: any) {
    throw new Error(err.message);
  }
}

/**
 * Первод Ruble с кошелька на кошелек
 */

type TTransactionData = {
  transactionHash: string,
};

export const executeTransactionDR = async (fromPrivateKey: string | null, toPublicKey: string | null, amount: number) => {
  try {
    if (!fromPrivateKey) {
      throw new Error('Отсутствует кошелек отправителя');
    }

    const { data }: { data: TTransactionData } = await axios.post(`${BASE_WALLET_URL}/v1/transfers/ruble`, {
      headers: {
        "Content-Type": "application/json",
        "Connection": "keep-alive",
        "Accept": "*/*"
      },
      data: {
        fromPrivateKey,
        toPublicKey,
        amount,
      }
    });

    return data.transactionHash;
  } catch(err: any) {
    throw new Error(err.message);
  }
}

/**
 * Поиск кошелька в БД по параметру
 */

export const findWallet = async (param: string, value: string) => {
  try {
    return await Wallet.findOne({ where: {
      [param]: value
    }})
  } catch (err: any) {
    throw new Error(err.message);
  }
}

/**
 * Поиск публичного кошелька в БД по параметру
 */

 export const findPublicWallet = async (param: string, value: string, type: 'chief' | 'hr') => {
  try {
    return await Wallet.findOne({ where: {
      [Op.and]: [{ [param]: value }, { type }]
    }})
  } catch (err: any) {
    throw new Error(err.message);
  }
}

