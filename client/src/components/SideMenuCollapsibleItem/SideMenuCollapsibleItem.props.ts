import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISideMenuCollapsibleItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: string;
}
