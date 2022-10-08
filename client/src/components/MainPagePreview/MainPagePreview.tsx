import { FC } from 'react';
import styles from './MainPagePreview.module.css';
import TasksList from './TasksList/TasksList';
import TeamPreview from './TeamPreview/TeamPreview';

const MainPagePreview: FC = () => (
  <div className={styles.container}>
    <TeamPreview />
    <TasksList />
  </div>
);

export default MainPagePreview;
