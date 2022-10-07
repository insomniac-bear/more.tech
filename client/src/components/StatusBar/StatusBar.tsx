import { FC } from 'react';
import styles from './StatusBar.module.css';
import { IStatusBarProps } from './StatusBar.props';
import image from '../../images/pilot.png';

const StatusBar: FC<IStatusBarProps> = ({ className, ...props }) => (
  <div className={`${styles.statusBar} ${className}`} {...props}>
    <img className={styles.statusBar__image} alt="pilot" src={image} />
    <span className={styles.statusBar__title}>Пилот</span>
  </div>
);

export default StatusBar;
