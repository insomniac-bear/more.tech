import { FC } from 'react';
import ControlItem from './components/ControlItem/ControlItem';
import styles from './ControlPanel.module.css';
import { IControlPanelProps } from './ControlPanel.props';

const ControlPanel: FC<IControlPanelProps> = ({ className = '', ...props }) => (
  <div className={`${styles.container} ${className}`} {...props}>
    <ControlItem buttonLabel="Бюджет трека" identifierColor="red" />
    <ControlItem buttonLabel="Бюджет команды" identifierColor="green" />
    <ControlItem buttonLabel="Создать команду" identifierColor="yellow" />
  </div>
);

export default ControlPanel;
