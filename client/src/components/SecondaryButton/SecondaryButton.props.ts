import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ISecondaryButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: 'submit' | 'button';
  disabled?: boolean;
  onClick?: () => void;
}
