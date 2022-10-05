import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITableValueCellProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  value: string;
  link?: string;
}
