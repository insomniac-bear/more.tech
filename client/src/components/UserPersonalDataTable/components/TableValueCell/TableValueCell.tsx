import { FC } from 'react';
import styles from './TableValueCell.module.css';
import { ITableValueCellProps } from './TableValueCell.props';

export const TableValueCell: FC<ITableValueCellProps> = ({
  value, link, className = '', ...props
}) => (link ? (
  <td className={`${styles.cell} ${styles.link} ${className}`} {...props}>
    {/* <Link to={{ pathname: link}}> */}
    {/* Тут будет ссылка ! */}
    {value}
    {/* </Link> */}
  </td>
) : (
  <td className={`${styles.cell} ${className}`} {...props}>
    {value}
  </td>
));
