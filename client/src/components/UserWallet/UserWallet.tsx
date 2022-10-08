import { FC } from 'react';
import SideMenuCollapsibleItem from '../SideMenuCollapsibleItem/SideMenuCollapsibleItem';
import styles from './UserWallet.module.css';
import { IUserWalletProps } from './UserWallet.props';

const UserWallet: FC<IUserWalletProps> = ({ className = '', ...props }) => (
  <div className={`${styles.wallet} ${className}`} {...props}>
    <p className={styles.label}>Мои ресурсы</p>
    <SideMenuCollapsibleItem label="Digital Ruble">1</SideMenuCollapsibleItem>
    <SideMenuCollapsibleItem label="Лимит «Спасибо»">2</SideMenuCollapsibleItem>
    <SideMenuCollapsibleItem label="История операций">3</SideMenuCollapsibleItem>
    <SideMenuCollapsibleItem label="Ресурсы команды">4</SideMenuCollapsibleItem>
  </div>
);

export default UserWallet;
