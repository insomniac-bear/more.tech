import { FC } from 'react';
import styles from './ExitButton.module.css';
import { IExitButtonProps } from './ExitButton.props';

export const ExitButton: FC<IExitButtonProps> = ({ className = '', ...props }) => {
  const logoutHandler = () => {
    // ...
  };

  return (
    <button className={`${styles.button} ${className}`} onClick={logoutHandler} type="button" {...props}>
      Выйти
    </button>
  );
};
