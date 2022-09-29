import React, { FC } from 'react';
import logo from '../../images/VTBLogo.svg';
import styles from './MainLogo.module.css';
import { IMainLogoProps } from './MainLogo.props';

export const MainLogo: FC<IMainLogoProps> = ({ width, className = '', ...props }) => (
  <img
    style={{ width: width, height: width * 0.347 }}
    className={`${styles.logo} ${className}`}
    src={logo}
    alt="Банк ВТБ"
    {...props}
  />
);
