import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TInnerMenuItemType } from '../../utils/mockData/userMenuMockData';

export interface IDropdownMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  menuData: TInnerMenuItemType[];
}
