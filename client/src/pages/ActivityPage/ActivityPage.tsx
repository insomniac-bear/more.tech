import { FC } from 'react';
import ActivitiesList from '../../components/ActivitiesList/ActivitiesList';
import Header from '../../components/Header/Header';
import { mockActivities } from '../../utils/mockData/activitiesMockData';
import styles from './ActivityPage.module.css';

const ActivityPage: FC = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.content}>
      <ActivitiesList activities={mockActivities} />
    </main>
  </div>
);

export default ActivityPage;
