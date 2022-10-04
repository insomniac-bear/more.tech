import { FC } from 'react';
import { SearchIcon } from '../Icons';
import styles from './SearchBar.module.css';
import { ISearchBarProps } from './SearchBar.props';

export const SearchBar: FC<ISearchBarProps> = ({ className = '', ...props }) => (
  <form className={`${styles.form} ${className}`} {...props}>
    <input className={styles.form__input} type="text" placeholder="Enter keywords" />
    <button className={styles.form__button} type="submit" aria-label="Поиск">
      <SearchIcon className={styles.form__buttonIcon} />
    </button>
  </form>
);
