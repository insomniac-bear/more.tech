import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  closeModal: () => any;
  children?: ReactNode;
}
