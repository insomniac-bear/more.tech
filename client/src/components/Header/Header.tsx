import { FC } from 'react';
import MainLogo from '../MainLogo/MainLogo';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';
import { IHeaderProps } from './Header.props';

const Header: FC<IHeaderProps> = ({ className = '', ...props }) => (
  <header className={`${styles.header} ${className}`} {...props}>
    <MainLogo width={79} />
    <SearchBar />
  </header>
);

export default Header;
