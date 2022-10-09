import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../Icons';
import styles from './ActivityPreview.module.css';
import { IActivityPreviewProps } from './ActivityPreview.props';
import { activityDataDto } from './utils';

const ActivityPreview: FC<IActivityPreviewProps> = ({ activityData, className = '', ...props }) => {
  const preparedData = activityDataDto(activityData);

  return (
    <ul className={`${styles.list} ${className}`} {...props}>
      {preparedData.map((el) => (
        <li key={el.id} className={styles.listItem}>
          <p className={styles.label}>{el.label}</p>
          <p className={styles.value}>{el.value}</p>
        </li>
      ))}
      <li className={styles.listItem}>
        <Link to="/#" className={styles.link}>
          Детали
          <ArrowIcon className={styles.linkIcon} />
        </Link>
      </li>
    </ul>
  );
};

export default ActivityPreview;
