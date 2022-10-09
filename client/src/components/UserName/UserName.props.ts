import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IUserNameProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  nameFields: {
    name: string;
    surname: string;
  };
}
