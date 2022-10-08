import Cookies from 'js-cookie';
import { FC, useEffect } from 'react';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import { apiService } from '../../services/apiService';
import { useAppDispatch } from '../../services/hooks';
import { setUser, setUserAuth } from '../../services/slices/userSlice';
import styles from './ProfilePage.module.css';

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const token = Cookies.get('token') || '';

  const { data: user, refetch } = apiService.useGetUserQuery(token);

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
      dispatch(setUserAuth(true));
    } else {
      refetch();
    }
  }, [dispatch, user, refetch]);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        {user && (
          <>
            <UserCard style={{ margin: '0 auto' }} userData={user} />
            <ControlPanel />
          </>
        )}
      </main>
    </div>
  );
};

export default ProfilePage;
