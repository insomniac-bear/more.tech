import { FC } from 'react';
import ControlItem from './components/ControlItem/ControlItem';
import styles from './ControlPanel.module.css';
import { IControlPanelProps } from './ControlPanel.props';

const ControlPanel: FC<IControlPanelProps> = ({ className = '', ...props }) => (
  <div className={`${styles.container} ${className}`} {...props}>
    <ControlItem buttonLabel="Бюджет трека" identifierColor="red" onClick={() => {}} />
    <ControlItem buttonLabel="Бюджет команды" identifierColor="green" onClick={() => {}} />
    <ControlItem buttonLabel="Создать команду" identifierColor="yellow" onClick={() => {}} />
  </div>
);

export default ControlPanel;
