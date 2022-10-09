import { TActivity } from '../../../../utils/mockData/activitiesMockData';

export const activityDataDto = (data: TActivity) => [
  {
    id: 'q12',
    label: 'Тип',
    value: data?.activityType,
  },
  {
    id: 'q1e3',
    label: 'Название активности',
    value: data?.activityName,
  },
  {
    id: 'q1tr',
    label: 'Награда',
    value: data?.reward,
  },
  {
    id: 'q1y4',
    label: 'На что влияет',
    value: data?.reward,
  },
];
