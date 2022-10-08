import { FC } from 'react';
import WalletItem from '../WalletItem/WalletItem';
import styles from './HistoryWalletItem.module.css';
import { IHistoryWalletItemProps } from './HistoryWalletItem.props';

const HistoryWalletItem: FC<IHistoryWalletItemProps> = ({ transaction, className = '', ...props }) => (
  <div className={`${styles.item} ${className}`} {...props}>
    <p className={styles.item__label}>
      {transaction.label}
      <span className={styles.item__purpose}>{transaction.purpose}</span>
    </p>
    <WalletItem
      amount={transaction.transactionType === 'write-off' ? `- ${transaction.amount}` : `+ ${transaction.amount}`}
      icon={transaction.currency}
    />
  </div>
);

export default HistoryWalletItem;
