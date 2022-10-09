import { FC } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import styles from './RespectForm.module.css';
import { IRespectFormProps } from './RespectForm.props';

type TFormData = {
  amount: string;
};

const RespectForm: FC<IRespectFormProps> = ({ className = '', ...props }) => {
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
      <h2 className={styles.form__heading}>Поблагодарить</h2>
      <input
        type="text"
        placeholder="Введите количество монет"
        className={styles.form__field}
        {...register('amount')}
      />
      <PrimaryButton type="submit" className={styles.form__submit}>
        Отправить
      </PrimaryButton>
    </form>
  );
};

export default RespectForm;
