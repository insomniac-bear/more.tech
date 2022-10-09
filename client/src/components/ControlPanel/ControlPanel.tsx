import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../services/hooks';
import ControlItem from './components/ControlItem/ControlItem';
import styles from './ControlPanel.module.css';
import { IControlPanelProps } from './ControlPanel.props';

const ControlPanel: FC<IControlPanelProps> = ({ className = '', ...props }) => {
  const role = useAppSelector((store) => store.user.user.role);
  const navigate = useNavigate();

  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {role === 'admin' && (
        <>
          <ControlItem buttonLabel="Создать команду" identifierColor="red" onClick={() => {}} />
          <ControlItem buttonLabel="Создать пилота" identifierColor="yellow" onClick={() => navigate('?modal=createPilot')} />
          <ControlItem buttonLabel="Создать рефери" identifierColor="green" onClick={() => {}} />
        </>
      )}
      {role === 'hr' && (
        <>
          <ControlItem buttonLabel="Создать команду" identifierColor="red" onClick={() => {}} />
          <ControlItem buttonLabel="Создать пилота" identifierColor="yellow" onClick={() => {}} />
          <ControlItem buttonLabel="Создать мероприятие" identifierColor="green" onClick={() => {}} />
        </>
      )}
      {role === 'chief' && (
        <ControlItem buttonLabel="Создать мероприятие" identifierColor="green" onClick={() => {}} />
      )}
    </div>
  );
};

export default ControlPanel;
