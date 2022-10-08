import { FC } from 'react';
import styles from './TasksList.module.css';

const TasksList: FC = () => (
  <div className={styles.container}>
    <p className={styles.label}>Наше решение позволяет:</p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <i className={styles.checkIcon} />
        <p className={styles.itemText}>укрепить культурный фундамент Банка</p>
      </li>
      <li className={styles.listItem}>
        <i className={styles.checkIcon} />
        <p>вовлечь сотрудников во внутрикорпоративные мероприятия</p>
      </li>
      <li className={styles.listItem}>
        <i className={styles.checkIcon} />
        <p>усилить мотивацию за счет внедрения игровых механик</p>
      </li>
    </ul>
  </div>
);

export default TasksList;
