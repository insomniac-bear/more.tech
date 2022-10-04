import { FC } from 'react';
import { TableLabelCell } from '../TableLabelCell/TableLabelCell';
import { TableValueCell } from '../TableValueCell/TableValueCell';
import styles from './TableRow.module.css';
import { ITableRowProps } from './TableRow.props';

export const TableRow: FC<ITableRowProps> = ({ rowElement, className = '', ...props }) => (
  <tr className={`${styles.row} ${className}`} {...props}>
    <TableLabelCell label={rowElement.label} />
    <TableValueCell value={rowElement.value} link={rowElement.linkPath || ''} />
  </tr>
);
