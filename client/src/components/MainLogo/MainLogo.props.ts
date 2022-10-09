import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IMainLogoProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  width: number;
}
