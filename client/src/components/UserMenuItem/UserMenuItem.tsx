import { FC } from 'react';
// import { Link } from 'react-router-dom';
import { IUserMenuItemProps } from './UserMenuItem.props';
import styles from './UserMenuItem.module.css';

const UserMenuItem: FC<IUserMenuItemProps> = ({
  name,
  url,
  isActive,
}) => (
  <li className={!isActive ? styles.container : styles.activeContainer}>
    {
      !isActive
        ? <a className={styles.link} href={url}>{name}</a>
        : <p className={styles.title}>{name}</p>
    }
  </li>
);

export default UserMenuItem;
