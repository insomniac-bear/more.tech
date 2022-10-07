import { FC } from 'react';
import ExitButton from '../ExitButton/ExitButton';
import MainLogo from '../MainLogo/MainLogo';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';
import { IHeaderProps } from './Header.props';

const Header: FC<IHeaderProps> = ({ className = '', ...props }) => (
  <header className={`${styles.header} ${className}`} {...props}>
    <MainLogo width={79} className={styles.logo} />
    <SearchBar className={styles.searchBar} />
    <ExitButton className={styles.backwardBtn} />
  </header>
);

export default Header;
