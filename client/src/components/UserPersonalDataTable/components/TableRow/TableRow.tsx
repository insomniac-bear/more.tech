import { FC } from 'react';
import TableCell from '../TableCell/TableCell';
import styles from './TableRow.module.css';
import { ITableRowProps } from './TableRow.props';

const TableRow: FC<ITableRowProps> = ({ rowElement, className = '', ...props }) => (
  <tr className={`${styles.row} ${className}`} {...props}>
    <TableCell text={rowElement.label} type="label" />
    <TableCell text={rowElement.value} type="value" />
  </tr>
);

export default TableRow;
