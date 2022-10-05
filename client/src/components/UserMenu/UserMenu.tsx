import { FC } from 'react';
import { IUserMenuProps } from './UserMenu.props';
import styles from './UserMenu.module.css';
import UserMenuNavLink from '../UserMenuNavLink/UserMenuNavLink';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const UserMenu: FC<IUserMenuProps> = ({ menuData, className = '', ...props }) => (
  <ul className={`${styles.userMenu} ${className}`} {...props}>
    {menuData.map((menuItem) => (
      <li key={menuItem.id} className={styles.userMenu__item}>
        <UserMenuNavLink
          to={menuItem.link}
          title={menuItem.title}
          innerMenu={menuItem.innerMenu}
          className={styles.userMenu__navLink}
        />
        {menuItem.innerMenu && (
          <DropdownMenu
            className={styles.userMenu__dropdownMenu}
            menuData={menuItem.innerMenu}
          />
        )}
      </li>
    ))}
  </ul>
);

export default UserMenu;
