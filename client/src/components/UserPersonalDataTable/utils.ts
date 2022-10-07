import { TUserPersonalData } from '../../utils/mockData/userMockData';

export const userPersonalDataDto = (data: TUserPersonalData) => ([
  {
    id: 'q12', label: 'Роль', value: data?.position,
  },
  {
    id: 'q1e3', label: 'Команда', value: data?.department,
  },
  {
    id: 'q1tr', label: 'Номер телефона', value: data?.phoneNumber,
  },
  {
    id: 'q1y4', label: 'Email', value: data?.email,
  },
]);
