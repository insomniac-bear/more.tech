import { nanoid } from '@reduxjs/toolkit';

export const userPersonalDataDto = (data: any) => ([
  {
    id: nanoid(), type: 'text', label: 'Ведущий аналитик', value: data?.position,
  },
  {
    id: nanoid(), type: 'text', label: 'Департамент', value: data?.department,
  },
  {
    id: nanoid(), type: 'text', label: 'Код сотрудника', value: data?.personalCode,
  },
  {
    id: nanoid(), type: 'text', label: 'Номер телефона', value: data?.phoneNumber,
  },
  {
    id: nanoid(), type: 'text', label: 'Email', value: data?.email,
  },
  {
    id: nanoid(),
    type: 'link',
    label: 'ФИО куратора',
    value: `${data?.curator?.surname} ${data?.curator?.name} ${data?.curator?.patronymic}`,
    linkPath: `users/${data?.curator?.id}`,
  },
  {
    id: nanoid(), type: 'text', label: 'Номер трудового договора', value: data?.laborСontract,
  },
  {
    id: nanoid(), type: 'text', label: 'Табельный номер сотрудника', value: data?.personnelNumber,
  },
]);
