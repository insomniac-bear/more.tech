import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SearchIcon } from '../Icons';
import styles from './SearchBar.module.css';
import { ISearchBarProps } from './SearchBar.props';

type TFormData = {
  searchParam: string;
}

const SearchBar: FC<ISearchBarProps> = ({ className = '', ...props }) => {
  const { register, handleSubmit } = useForm<TFormData>();

  const formSubmitHandler = (data: TFormData) => {
    data.searchParam.toLowerCase(); // чтобы линтер не ругался =)
  };

  return (
    <form className={`${styles.form} ${className}`} {...props} onSubmit={handleSubmit(formSubmitHandler)} aria-label="Поиск">
      <input className={styles.form__input} type="text" placeholder="Поиск" {...register('searchParam')} />
      <button className={styles.form__button} type="submit">
        <SearchIcon className={styles.form__buttonIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
