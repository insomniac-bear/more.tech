import { FC } from 'react';
import styles from './WalletItem.module.css';
import { IWalletItemProps } from './WalletItem.props';

const WalletItem: FC<IWalletItemProps> = ({
  amount, icon, className = '', ...props
}) => (
  <div className={`${styles.item} ${className}`} {...props}>
    <p className={styles.amount}>{amount}</p>
    <i className={`${styles.icon} ${styles[`icon_${icon}`]}`} />
  </div>
);

export default WalletItem;
