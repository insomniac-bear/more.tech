import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITableCellProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  text: string;
  type: 'label' | 'value'
}
