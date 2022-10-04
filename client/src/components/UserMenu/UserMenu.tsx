import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IUserMenuProps } from './UserMenu.props';
import styles from './UserMenu.module.css';

const UserMenu: FC<IUserMenuProps> = ({ menuData, className = '', ...props }) => (
  <ul className={`${styles.userMenu} ${className}`} {...props}>
    {menuData.map((menuItem) => (
      <li key={menuItem.id} className={styles.userMenu__item}>
        <NavLink
          to={menuItem.link}
          className={({ isActive }) => (`${styles.userMenu__navLink} ${isActive ? styles.userMenu__navLink_active : ''}`)}
        >
          <>
            {menuItem.title}
            {menuItem.innerMenu && <div className={styles.arrowDown} />}
          </>
        </NavLink>

        {menuItem.innerMenu && (
          <ul className={styles.userMenu__innerMenu}>
            {menuItem.innerMenu.map((innerMenuItem) => (
              <li key={innerMenuItem.id}>
                <NavLink
                  to={innerMenuItem.link}
                  className={styles.userMenu__innerNavLink}
                >
                  {innerMenuItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

export default UserMenu;
