import { FC } from 'react';
import Header from '../../components/Header/Header';
import MainPagePreview from '../../components/MainPagePreview/MainPagePreview';
import Modal from '../../components/Modal/Modal';
import styles from './MainPage.module.css';

const MainPage: FC = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.content}>
      <MainPagePreview />
      <Modal closeModal={() => {}}><p style={{ color: '#fff' }}>1</p></Modal>
    </main>
  </div>
);

export default MainPage;
