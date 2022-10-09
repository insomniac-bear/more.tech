import { FC } from 'react';
import styles from './ActivitiesList.module.css';
import { IActivityListProps } from './ActivitiesList.props';
import ActivityPreview from './components/ActivityPreview/ActivityPreview';

const ActivitiesList: FC<IActivityListProps> = ({ activities, className = '', ...props }) => (
  <ul className={`${styles.list} ${className}`} {...props}>
    {activities.map((el) => (
      <li key={el.id}>
        <ActivityPreview activityData={el} />
      </li>
    ))}
  </ul>
);

export default ActivitiesList;
