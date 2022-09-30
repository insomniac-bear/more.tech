import React, { FC } from 'react';
import styles from './UserAvatar.module.css';
import { IUserAvatarProps } from './UserAvatar.props';

export const UserAvatar: FC<IUserAvatarProps> = ({
  src, alt, className = '', ...props
}) => (
  <div className={`${styles.avatarContainer} ${className}`} {...props} aria-label={alt}>
    {src && <img src={src} alt={alt} className={styles.avatar} />}
  </div>
);
