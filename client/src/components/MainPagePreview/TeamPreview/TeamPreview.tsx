import { FC } from 'react';
import styles from './TeamPreview.module.css';
import addLogo from '../../../images/ADD_logo.svg';

const TeamPreview: FC = () => (
  <div className={styles.container}>
    <div className={styles.logoWrapper}>
      <img className={styles.logo} src={addLogo} alt="ADD" />
    </div>
    <div className={styles.listContainer}>
      <p className={styles.listHeading}>Пилоты</p>
      <ul className={styles.teamList}>
        <li className={styles.listItem}>Шакурова Эвина</li>
        <li className={styles.listItem}>Феоктистова Наталия</li>
        <li className={styles.listItem}>Кузин Артемий</li>
        <li className={styles.listItem}>Колосов Андрей</li>
      </ul>
    </div>
    <div className={styles.listContainer}>
      <p className={styles.listHeading}>Капитан</p>
      <ul className={styles.teamList}>
        <li className={styles.listItem}>Черепанов Кирилл</li>
      </ul>
    </div>
  </div>
);

export default TeamPreview;
