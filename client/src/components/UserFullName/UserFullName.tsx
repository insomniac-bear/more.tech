import React, { FC } from 'react';
import styles from './UserFullName.module.css';
import { IUserFullNameProps } from './UserFullName.props';

export const UserFullName: FC<IUserFullNameProps> = ({ nameFields, className = '', ...props }) => {
  const { name, surname, patronymic } = nameFields;

  return (
    <h2 className={`${styles.fullName} ${className}`} {...props}>
      {`${name} ${surname} ${patronymic}`}
    </h2>
  );
};
