import { FC } from 'react';
import styles from './PrimaryButton.module.css';
import { IPrimaryButtonProps } from './PrimaryButton.props';

const PrimaryButton: FC<IPrimaryButtonProps> = ({
  type, children, onClick, disabled, className = '', ...props
}) => (
  <button
    className={`${styles.button} ${className}`}
    type={type === 'submit' ? 'submit' : 'button'}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
