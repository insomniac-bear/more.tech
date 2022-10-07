import { FC } from 'react';
import styles from './TableLabelCell.module.css';
import { ITableLabelCellProps } from './TableLabelCell.props';

const TableLabelCell: FC<ITableLabelCellProps> = ({
  label, className = '', ...props
}) => (
  <td className={`${styles.cell} ${className}`} {...props}>
    {label}
  </td>
);

export default TableLabelCell;
