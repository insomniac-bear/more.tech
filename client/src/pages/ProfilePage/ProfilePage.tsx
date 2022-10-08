import { FC } from 'react';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import UserCard from '../../components/UserCard/UserCard';
import UserWallet from '../../components/UserWallet/UserWallet';
import { user } from '../../utils/mockData/userMockData';
import styles from './ProfilePage.module.css';

const ProfilePage: FC = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.content}>
      <UserCard className={styles.userCard} userData={user} />
      <div className={styles.progress}>
        <ProgressBar progress={50} skill="Soft" />
        <ProgressBar progress={70} skill="Hard" />
      </div>
      <UserWallet className={styles.wallet} />
    </main>
    <SecondaryButton type="button">Поблагодарить</SecondaryButton>
  </div>
);

export default ProfilePage;
