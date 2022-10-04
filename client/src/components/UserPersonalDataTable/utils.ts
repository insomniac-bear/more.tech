import { nanoid } from '@reduxjs/toolkit';

export const userPersonalDataDto = (data: any) => ([
  {
    id: nanoid(), label: 'Ведущий аналитик', value: data?.position,
  },
  {
    id: nanoid(), label: 'Департамент', value: data?.department,
  },
  {
    id: nanoid(), label: 'Код сотрудника', value: data?.personalCode,
  },
  {
    id: nanoid(), label: 'Номер телефона', value: data?.phoneNumber,
  },
  {
    id: nanoid(), label: 'Email', value: data?.email,
  },
  {
    id: nanoid(),
    label: 'ФИО куратора',
    value: `${data?.curator?.surname} ${data?.curator?.name} ${data?.curator?.patronymic}`,
    linkPath: `users/${data?.curator?.id}`,
  },
  {
    id: nanoid(), label: 'Номер трудового договора', value: data?.laborСontract,
  },
  {
    id: nanoid(), label: 'Табельный номер сотрудника', value: data?.personnelNumber,
  },
]);
