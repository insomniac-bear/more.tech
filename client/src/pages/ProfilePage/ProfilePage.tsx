import { FC } from 'react';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import { user } from '../../utils/mockData/userMockData';
import styles from './ProfilePage.module.css';

const ProfilePage: FC = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.content}>
      <UserCard style={{ margin: '0 auto' }} userData={user} />
      <ControlPanel />
    </main>
  </div>
);

export default ProfilePage;
