import { FC } from 'react';
import ControlPanel from '../ControlPanel/ControlPanel';
import StatusBar from '../StatusBar/StatusBar';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserName from '../UserName/UserName';
import UserPersonalDataTable from '../UserPersonalDataTable/UserPersonalDataTable';
import styles from './UserCard.module.css';
// import { IUserCardProps } from './UserCard.props';

const UserCard: FC<any> = ({ userData, className = '', ...props }) => {
  const {
    name, surname, image, role, email, position, department, phone,
  } = userData;

  const personalData = {
    position,
    department,
    phoneNumber: phone,
    email,
  };

  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <StatusBar status={role} className={styles.statusBar} />
      <UserName nameFields={{ name, surname }} className={styles.name} />
      <UserPersonalDataTable data={personalData} className={styles.table} />
      <UserAvatar alt={`${name} ${surname}`} src={image} className={styles.avatar} />
      <ControlPanel className={styles.controls} />
    </div>
  );
};

export default UserCard;
