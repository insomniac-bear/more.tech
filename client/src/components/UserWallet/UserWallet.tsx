import { FC } from 'react';
import SideMenuCollapsibleItem from '../SideMenuCollapsibleItem/SideMenuCollapsibleItem';
import HistoryWalletItem from './components/HistoryWalletItem/HistoryWalletItem';
import WalletItem from './components/WalletItem/WalletItem';
import styles from './UserWallet.module.css';
import { IUserWalletProps } from './UserWallet.props';

type TMockTransaction = {
  id: string;
  label: string;
  transactionType: 'write-off' | 'refill';
  amount: string;
  currency: 'coin' | 'thanks';
  purpose: string;
};

const mockHistory: TMockTransaction[] = [
  {
    id: '123',
    label: 'Иванова Л.Ф.',
    transactionType: 'write-off',
    amount: '1',
    currency: 'thanks',
    purpose: 'Спасибо',
  },
  {
    id: '1234',
    label: 'VTB Store',
    transactionType: 'write-off',
    amount: '100',
    currency: 'coin',
    purpose: 'Аксессуары',
  },
  {
    id: '125',
    label: 'Иванова Л.Ф.',
    transactionType: 'refill',
    amount: '1',
    currency: 'thanks',
    purpose: 'Спасибо',
  },
];

const UserWallet: FC<IUserWalletProps> = ({ className = '', ...props }) => (
  <div className={`${styles.wallet} ${className}`} {...props}>
    <p className={styles.label}>Мои ресурсы</p>
    <SideMenuCollapsibleItem className={styles.item} label="Digital Ruble">
      <WalletItem icon="coin" amount="155468" />
    </SideMenuCollapsibleItem>
    <SideMenuCollapsibleItem className={styles.item} label="Лимит «Спасибо»">
      <WalletItem icon="thanks" amount="15" />
    </SideMenuCollapsibleItem>
    <SideMenuCollapsibleItem className={styles.item} label="История операций">
      {mockHistory.map((el) => (
        <HistoryWalletItem key={el.id} transaction={el} />
      ))}
    </SideMenuCollapsibleItem>
    <SideMenuCollapsibleItem className={styles.item} label="Ресурсы команды">
      <WalletItem icon="coin" amount="15546800" />
    </SideMenuCollapsibleItem>
  </div>
);

export default UserWallet;
