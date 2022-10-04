import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITableRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  rowElement: any;
}
