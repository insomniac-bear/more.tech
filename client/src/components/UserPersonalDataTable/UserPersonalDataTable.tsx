import { FC } from 'react';
// import { Link } from 'react-router-dom';
import styles from './UserPersonalDataTable.module.css';
import { IUserPersonalDataTableProps } from './UserPersonalDataTable.props';
import { userPersonalDataDto } from './utils';

export const UserPersonalDataTable: FC<IUserPersonalDataTableProps> = ({ data, className = '', ...props }) => {
  const preparedData = userPersonalDataDto(data);

  return (
    <table className={`${styles.table} ${className}`} {...props}>
      <tbody className={styles.table__body}>
        {preparedData.map((el) => (el.type === 'text' ? (
          <tr key={el.id} className={styles.table__row}>
            <td className={styles.table__itemLabel}>{el.label}</td>
            <td className={styles.table__itemValue}>{el.value}</td>
          </tr>
        )
          : (
            <tr key={el.id} className={styles.table__row}>
              <td className={styles.table__itemLabel}>{el.label}</td>
              <td className={styles.table__itemLink}>
                {/* <Link to={{ pathname: el.linkPath }}> */}
                {el.value}
                {/* </Link> */}
              </td>
            </tr>
          )))}
      </tbody>
    </table>
  );
};
