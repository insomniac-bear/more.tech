import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IUserFullNameProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  nameFields: {
    name: string;
    surname: string;
    patronymic: string;
  };
}
