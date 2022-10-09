import { NavLinkProps } from 'react-router-dom';
import { TInnerMenuItemType } from '../../utils/mockData/userMenuMockData';

export interface IUserMenuNavLinkProps extends NavLinkProps {
  title: string;
  innerMenu?: TInnerMenuItemType[];
}
