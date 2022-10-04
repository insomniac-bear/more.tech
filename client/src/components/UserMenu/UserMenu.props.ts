import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TUserMenuMockDataType } from '../../utils/mockData/userMenuMockData';

export interface IUserMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  menuData: TUserMenuMockDataType[];
}
