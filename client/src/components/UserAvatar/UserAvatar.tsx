import { FC } from 'react';
import styles from './UserAvatar.module.css';
import { IUserAvatarProps } from './UserAvatar.props';

export const UserAvatar: FC<IUserAvatarProps> = ({
  src, alt, className = '', ...props
}) => (src ? (
  <img src={src} alt={alt} className={styles.avatar} />
) : (
  <div className={`${styles.placeholder} ${className}`} {...props} aria-label={alt || 'Фотография'} />
));
