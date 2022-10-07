import { FC } from 'react';
import styles from './UserName.module.css';
import { IUserNameProps } from './UserName.props';

const UserName: FC<IUserNameProps> = ({ nameFields, className = '', ...props }) => {
  const { name, surname } = nameFields;

  return (
    <h2 className={`${styles.fullName} ${className}`} {...props}>
      {`${name} ${surname}`}
    </h2>
  );
};

export default UserName;
