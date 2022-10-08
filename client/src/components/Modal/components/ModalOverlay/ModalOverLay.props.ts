import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IModalOverlayProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  handleClick: () => void;
}
