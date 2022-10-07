import { FC } from 'react';
import styles from './ExitButton.module.css';
import { IExitButtonProps } from './ExitButton.props';

const ExitButton: FC<IExitButtonProps> = ({ className = '', ...props }) => {
  const logoutHandler = () => {
    // ...
  };

  return (
    <button className={`${styles.button} ${className}`} onClick={logoutHandler} type="button" {...props}>
      Вернуться
    </button>
  );
};

export default ExitButton;
