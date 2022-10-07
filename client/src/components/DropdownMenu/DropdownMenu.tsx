import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DropdownMenu.module.css';
import { IDropdownMenuProps } from './DropdownMenu.props';

const DropdownMenu: FC<IDropdownMenuProps> = ({ menuData, className = '', ...props }) => (
  <ul className={`${styles.dropdownMenu} ${className}`} {...props}>
    {menuData.map((menuItem) => (
      <li key={menuItem.id}>
        <NavLink
          to={menuItem.link}
          className={styles.dropdownMenu__innerNavLink}
        >
          {menuItem.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default DropdownMenu;
