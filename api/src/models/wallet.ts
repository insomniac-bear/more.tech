import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { WalletAttributes } from './utils/wallet.type';


export class Wallet extends Model<WalletAttributes> {}

Wallet.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  publicKey: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  privateKey: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('self', 'chief', 'hr', 'corporate'),
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'wallets',
  timestamps: false,
});
