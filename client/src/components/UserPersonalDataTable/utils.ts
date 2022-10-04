export const userPersonalDataDto = (data: any) => ([
  {
    id: 'q12', label: 'Ведущий аналитик', value: data?.position,
  },
  {
    id: 'q1e3', label: 'Департамент', value: data?.department,
  },
  {
    id: 'q1g', label: 'Код сотрудника', value: data?.personalCode,
  },
  {
    id: 'q1tr', label: 'Номер телефона', value: data?.phoneNumber,
  },
  {
    id: 'q1y4', label: 'Email', value: data?.email,
  },
  {
    id: 'q1p3',
    label: 'ФИО куратора',
    value: `${data?.curator?.surname} ${data?.curator?.name} ${data?.curator?.patronymic}`,
    linkPath: `users/${data?.curator?.id}`,
  },
  {
    id: 'q109ol', label: 'Номер трудового договора', value: data?.laborСontract,
  },
  {
    id: 'qnjg', label: 'Табельный номер сотрудника', value: data?.personnelNumber,
  },
]);
