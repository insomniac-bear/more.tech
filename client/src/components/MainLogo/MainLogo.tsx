import { FC } from 'react';
import logo from '../../images/VTBLogo.svg';
import styles from './MainLogo.module.css';
import { IMainLogoProps } from './MainLogo.props';

const MainLogo: FC<IMainLogoProps> = ({ width, className = '', ...props }) => (
  <img
    style={{ width, height: width * 0.5823 }}
    className={`${styles.logo} ${className}`}
    src={logo}
    alt="Банк ВТБ"
    {...props}
  />
);

export default MainLogo;
