import { SVGProps } from 'react';

export interface IProgressBarProps extends SVGProps<SVGSVGElement> {
  size?: number;
  progress: number;
}
