import { FC } from 'react';
import styles from './UserFullName.module.css';
import { IUserFullNameProps } from './UserFullName.props';

const UserFullName: FC<IUserFullNameProps> = ({ nameFields, className = '', ...props }) => {
  const { name, surname } = nameFields;

  return (
    <h2 className={`${styles.fullName} ${className}`} {...props}>
      {`${name} ${surname}`}
    </h2>
  );
};

export default UserFullName;
