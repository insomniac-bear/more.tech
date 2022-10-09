import { FC } from 'react';
import styles from './TableCell.module.css';
import { ITableCellProps } from './TableCell.props';

const TableCell: FC<ITableCellProps> = ({
  text, type, className = '', ...props
}) => (
  <td className={`${styles.cell} ${styles[`cell_${type}`]} ${className}`} {...props}>
    {text}
  </td>
);

export default TableCell;
