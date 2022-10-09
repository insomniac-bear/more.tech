import { FC } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import styles from './CreateUserForm.module.css';
import { ICreateUserFormProps } from './CreateUserForm.props';

type TFormData = {
  role: string;
  team: string;
  phone: string;
  email: string;
  password: string;
};

const CreateUserForm: FC<ICreateUserFormProps> = ({ className = '', ...props }) => {
  const { register, handleSubmit } = useForm<TFormData>();

  const formSubmitHandler = (data: TFormData) => {
    console.log(data);
  };

  return (
    <form
      className={`${styles.form} ${className}`}
      onSubmit={handleSubmit(formSubmitHandler)}
      {...props}
      aria-label="Создание пользователя"
    >
      <h2 className={styles.form__heading}>Создание пилота</h2>
      <input type="text" placeholder="Роль" className={styles.form__field} {...register('role')} />
      <input type="text" placeholder="Команда" className={styles.form__field} {...register('team')} />
      <input type="text" placeholder="Номер телефона" className={styles.form__field} {...register('phone')} />
      <input type="text" placeholder="Email" className={styles.form__field} {...register('email')} />
      <input type="text" placeholder="Пароль" className={styles.form__field} {...register('password')} />
      <PrimaryButton type="submit" className={styles.form__submit}>
        Создать
      </PrimaryButton>
    </form>
  );
};

export default CreateUserForm;
