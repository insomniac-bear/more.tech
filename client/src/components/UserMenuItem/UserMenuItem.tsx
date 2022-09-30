import { FC} from 'react';
// import { Link } from 'react-router-dom';
import { IUserMenuItemProps } from './UserMenuItem';
import styles from './SideLink.module.css';

export const UserMenuItem: FC<IUserMenuItemProps> = ({
  name,
  url,
  isActive
}) => {
  return (
    <li className={!isActive ? styles.container : styles.activeContainer}>
      {
        !isActive
          ? <a className={styles.link} href={url}>{name}</a>
          : <p className={styles.title}>{name}</p>
      }
    </li>
  );
}
