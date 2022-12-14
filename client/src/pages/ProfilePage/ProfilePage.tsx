import Cookies from 'js-cookie';
import { FC, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import UserCard from '../../components/UserCard/UserCard';
import { apiService } from '../../services/apiService';
import { useAppDispatch } from '../../services/hooks';
import { setUser, setUserAuth } from '../../services/slices/userSlice';
import UserWallet from '../../components/UserWallet/UserWallet';
import styles from './ProfilePage.module.css';
import Modal from '../../components/Modal/Modal';
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm';

const ProfilePage: FC = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const modal = params.get('modal');
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
            <UserCard className={styles.userCard} userData={user} />
            <div className={styles.progress}>
              <ProgressBar progress={50} skill="Soft" />
              <ProgressBar progress={70} skill="Hard" />
            </div>
            <UserWallet className={styles.wallet} />
          </>
        )}
      </main>
      <SecondaryButton type="button">Поблагодарить</SecondaryButton>
      {modal === 'createPilot' && (
        // eslint-disable-next-line react/no-unstable-nested-components
        <Modal closeModal={() => navigate('/profile')}><CreateUserForm /></Modal>
      )}
    </div>
  );
};

export default ProfilePage;
