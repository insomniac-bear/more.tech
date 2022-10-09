import { FC } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import styles from './CreateActivityForm.module.css';
import { ICreateActivityFormProps } from './CreateActivityForm.props';

type TFormData = {
  activityName: string;
  affect: string;
  reward: string;
  description: string;
};
const options = [
  { value: 'hard', label: 'Hard Skill', id: '1' },
  { value: 'soft', label: 'Soft Skill', id: '2' },
];

const CreateActivityForm: FC<ICreateActivityFormProps> = ({ className = '', ...props }) => {
  const { register, handleSubmit } = useForm<TFormData>();

  const formSubmitHandler = (data: TFormData) => {
    console.log(data);
  };

  return (
    <form
      className={`${styles.form} ${className}`}
      onSubmit={handleSubmit(formSubmitHandler)}
      {...props}
      aria-label="Создание активности"
    >
      <h2 className={styles.form__heading}>Cоздать активность</h2>
      <input
        type="text"
        placeholder="Название активности"
        className={styles.form__field}
        {...register('activityName')}
      />
      <select className={styles.form__select} placeholder="На что влияет участие" {...register('affect')}>
        {options.map((option) => (
          <option key={option.id} className={styles.select__option} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Награда за участие (в монетах)"
        className={styles.form__field}
        {...register('reward')}
      />
      <textarea
        placeholder="Краткое описание (не более 300 символов)"
        className={styles.form__textArea}
        {...register('description')}
      />
      <PrimaryButton type="submit" className={styles.form__submit}>
        Готово
      </PrimaryButton>
    </form>
  );
};

export default CreateActivityForm;
