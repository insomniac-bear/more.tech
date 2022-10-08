import { FC } from 'react';
import Header from '../../components/Header/Header';
import styles from './ActivityPage.module.css';

const ActivityPage: FC = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.content}>
      1
    </main>
  </div>
);

export default ActivityPage;
