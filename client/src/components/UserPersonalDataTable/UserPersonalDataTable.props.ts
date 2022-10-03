import { DetailedHTMLProps, TableHTMLAttributes } from 'react';

export interface IUserPersonalDataTableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  data: any;
}
