/* eslint-disable no-param-reassign */
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../services/apiService';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import styles from './CreateUserForm.module.css';
import { ICreateUserFormProps } from './CreateUserForm.props';

type TFormData = {
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  phone: string;
  departmentId: number;
  positionId: number;
  roleId: number;
};

const CreateUserForm: FC<ICreateUserFormProps> = ({ className = '', ...props }) => {
  const { register, handleSubmit } = useForm<TFormData>();
  const [createPilot] = apiService.useCreatePilotMutation();
  const navigate = useNavigate();

  const formSubmitHandler = async (data: TFormData) => {
    data.departmentId = 1;
    data.positionId = 2;
    data.roleId = 2;

    try {
      createPilot(data);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      navigate(-1);
    }
  };

  return (
    <form
      className={`${styles.form} ${className}`}
      onSubmit={handleSubmit(formSubmitHandler)}
      {...props}
      aria-label="Создание пользователя"
    >
      <h2 className={styles.form__heading}>Создание пилота</h2>
      <input type="text" placeholder="Имя" className={styles.form__field} {...register('name')} />
      <input type="text" placeholder="Фамилия" className={styles.form__field} {...register('surname')} />
      <input type="text" placeholder="Отчество" className={styles.form__field} {...register('patronymic')} />
      <input type="text" placeholder="Email" className={styles.form__field} {...register('email')} />
      <input type="text" placeholder="Телефон" className={styles.form__field} {...register('phone')} />
      <PrimaryButton type="submit" className={styles.form__submit}>
        Создать
      </PrimaryButton>
    </form>
  );
};

export default CreateUserForm;
