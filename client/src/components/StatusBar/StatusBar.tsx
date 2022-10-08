import { FC } from 'react';
import styles from './StatusBar.module.css';
import { IStatusBarProps } from './StatusBar.props';
import image from '../../images/pilot.png';

const StatusBar: FC<IStatusBarProps> = ({ status, className, ...props }) => {
  switch (status) {
    case 'admin':
      return (
        <div className={`${styles.statusBar} ${className}`} {...props}>
          <img className={styles.statusBar__image} alt="admin" src={image} />
          <span className={styles.statusBar__title}>Администратор</span>
        </div>
      );
    case 'hr':
      return (
        <div className={`${styles.statusBar} ${className}`} {...props}>
          <img className={styles.statusBar__image} alt="referee" src={image} />
          <span className={styles.statusBar__title}>Рефери</span>
        </div>
      );
    case 'user':
      return (
        <div className={`${styles.statusBar} ${className}`} {...props}>
          <img className={styles.statusBar__image} alt="pilot" src={image} />
          <span className={styles.statusBar__title}>Пилот</span>
        </div>
      );
    case 'chief':
      return (
        <div className={`${styles.statusBar} ${className}`} {...props}>
          <img className={styles.statusBar__image} alt="captain" src={image} />
          <span className={styles.statusBar__title}>Капитан</span>
        </div>
      );
    default:
      return (
        <div className={`${styles.statusBar} ${className}`} {...props}>
          <img className={styles.statusBar__image} alt="pilot" src={image} />
          <span className={styles.statusBar__title}>Пилот</span>
        </div>
      );
  }
};

export default StatusBar;
