import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TUser } from '../../utils/mockData/userMockData';

export interface IUserCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  userData: TUser;
}
