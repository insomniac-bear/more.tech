import { SVGProps } from 'react';

export interface IUserStatusLogoProps extends SVGProps<SVGSVGElement> {
  width: number;
  userStatus: 'bronze' | 'silver' | 'gold' | 'platinum' | 'emerald';
}
