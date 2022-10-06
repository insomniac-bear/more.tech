import { FC, FormEvent, useRef } from 'react';
import { SearchIcon } from '../Icons';
import styles from './SearchBar.module.css';
import { ISearchBarProps } from './SearchBar.props';

export const SearchBar: FC<ISearchBarProps> = ({ className = '', ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    // inputRef?.current?.value...
  };

  return (
    <form className={`${styles.form} ${className}`} {...props} onSubmit={formSubmitHandler} aria-label="Поиск">
      <input className={styles.form__input} type="text" ref={inputRef} placeholder="Поиск" />
      <button className={styles.form__button} type="submit">
        <SearchIcon className={styles.form__buttonIcon} />
      </button>
    </form>
  );
};
