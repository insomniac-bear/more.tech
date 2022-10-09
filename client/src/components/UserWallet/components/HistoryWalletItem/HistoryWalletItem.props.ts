import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IHistoryWalletItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  transaction: {
    id: string;
    label: string;
    transactionType: 'write-off' | 'refill';
    amount: string;
    currency: 'coin' | 'thanks';
    purpose: string;
  };
}
