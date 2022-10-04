import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITableLabelCellProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  label: string;
}
