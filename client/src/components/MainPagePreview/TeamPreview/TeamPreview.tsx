import { FC } from 'react';
import styles from './TeamPreview.module.css';
import addLogo from '../../../images/ADD_logo.svg';

const TeamPreview: FC = () => (
  <div className={styles.container}>
    <img src={addLogo} alt="ADD" />
  </div>
);

export default TeamPreview;
