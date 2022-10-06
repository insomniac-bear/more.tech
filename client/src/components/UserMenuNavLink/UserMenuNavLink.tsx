import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IUserMenuNavLinkProps } from './UserMenuNavLink.props';
import styles from './UserMenuNavLink.module.css';

const UserMenuNavLink: FC<IUserMenuNavLinkProps> = ({
  title, innerMenu, className = '', ...props
}) => (
  <NavLink
    className={({ isActive }) => (`${styles.userMenuNavLink} ${isActive ? styles.userMenuNavLink_active : ''} ${className}`)}
    {...props}
  >
    <>
      {title}
      {innerMenu && <div className={styles.userMenuNavLink__arrowDown} />}
    </>
  </NavLink>
);

export default UserMenuNavLink;
