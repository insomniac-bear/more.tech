import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IWalletItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: 'coin' | 'thanks'
  amount: string;
}
