import { FC } from 'react';
import styles from './UserAvatar.module.css';
import { IUserAvatarProps } from './UserAvatar.props';

const UserAvatar: FC<IUserAvatarProps> = ({
  src, alt, className = '', ...props
}) => (src ? (
  <img src={src} alt={alt} className={`${styles.avatar} ${className}`} />
) : (
  <div className={`${styles.placeholder} ${className}`} {...props} aria-label={alt || 'Фотография'} />
));

export default UserAvatar;
