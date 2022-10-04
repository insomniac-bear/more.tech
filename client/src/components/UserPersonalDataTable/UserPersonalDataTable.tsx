import { FC } from 'react';
import { TableRow } from './components/TableRow/TableRow';
import styles from './UserPersonalDataTable.module.css';
import { IUserPersonalDataTableProps } from './UserPersonalDataTable.props';
import { userPersonalDataDto } from './utils';

export const UserPersonalDataTable: FC<IUserPersonalDataTableProps> = ({ data, className = '', ...props }) => {
  const preparedData = userPersonalDataDto(data);

  return (
    <table className={`${styles.table} ${className}`} {...props} aria-label="Персональные данные пользователя">
      <tbody className={styles.table__body}>
        {preparedData.map((el) => <TableRow rowElement={el} key={el.id} className={styles.table__row} />)}
      </tbody>
    </table>
  );
};
