import { FC } from 'react';
import styles from './SecondaryButton.module.css';
import { ISecondaryButtonProps } from './SecondaryButton.props';

const SecondaryButton: FC<ISecondaryButtonProps> = ({
  type, children, onClick, disabled, className = '', ...props
}) => (
  <button
    className={`${styles.btn} ${className}`}
    type={type === 'button' ? 'button' : 'submit'}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default SecondaryButton;
