import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class Wallet extends Model {}

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
  }
}, {
  sequelize,
  tableName: 'wallet'
});
