import { FC } from 'react';
import SideMenuCollapsibleItem from '../SideMenuCollapsibleItem/SideMenuCollapsibleItem';
import styles from './UserWallet.module.css';
import { IUserWalletProps } from './UserWallet.props';

const UserWallet: FC<IUserWalletProps> = ({ className = '', ...props }) => (
  <div className={`${styles.wallet} ${className}`} {...props}>
    <p className={styles.label}>Мои ресурсы</p>
    <SideMenuCollapsibleItem label="Digital Ruble" />
    <SideMenuCollapsibleItem label="Лимит «Спасибо»" />
    <SideMenuCollapsibleItem label="История операций" />
    <SideMenuCollapsibleItem label="Ресурсы команды" />
  </div>
);

export default UserWallet;
