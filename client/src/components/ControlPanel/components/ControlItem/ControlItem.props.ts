import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IControlItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  buttonLabel: string;
  identifierColor: 'red' | 'yellow' | 'green';
}
