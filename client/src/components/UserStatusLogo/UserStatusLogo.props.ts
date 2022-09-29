import { SVGProps } from 'react';

export interface IUserStatusLogoProps extends SVGProps<SVGSVGElement> {
  width: number;
  status: 'bronze' | 'silver' | 'gold' | 'platinum' | 'emerald';
}
