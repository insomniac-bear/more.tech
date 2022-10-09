import { FC } from 'react';
import { Link } from 'react-router-dom';
import { userMenuMockData } from '../../utils/mockData/userMenuMockData';
import ExitButton from '../ExitButton/ExitButton';
import MainLogo from '../MainLogo/MainLogo';
import SearchBar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Header.module.css';
import { IHeaderProps } from './Header.props';

const Header: FC<IHeaderProps> = ({ className = '', ...props }) => (
  <header className={`${styles.header} ${className}`} {...props}>
    <Link to="/">
      <MainLogo width={79} className={styles.header__logo} />
    </Link>
    <UserMenu menuData={userMenuMockData} className={styles.header__menu} />
    <SearchBar className={styles.header__searchBar} />
    <ExitButton className={styles.header__backwardBtn} />
  </header>
);

export default Header;
