import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IPrimaryButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}
