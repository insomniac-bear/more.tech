import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IUserAvatarProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  alt: string;
}
