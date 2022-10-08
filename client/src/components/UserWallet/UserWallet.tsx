import { FC } from 'react';
import styles from './UserWallet.module.css';
import { IUserWalletProps } from './UserWallet.props';

const UserWallet: FC<IUserWalletProps> = ({ className = '', ...props }) => (
  <div className={`${styles.wallet} ${className}`} {...props}>
    <p className={styles.label}>Мои ресурсы</p>
  </div>
);

export default UserWallet;
