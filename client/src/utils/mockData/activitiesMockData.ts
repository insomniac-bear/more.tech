export type TActivity = {
  id: string;
  activityName: string;
  activityType: string;
  reward: string;
  affect: string;
};

export const mockActivities: TActivity[] = [
  {
    id: 's12',
    activityName: 'Корпоративная активность',
    activityType: 'Социальный опрос',
    reward: '100 монет',
    affect: 'Soft skills',
  },
  {
    id: 's232',
    activityName: 'Командная активность',
    activityType: 'Курс «Основы Java»',
    reward: '100 монет',
    affect: 'Hard skills',
  },
  {
    id: 's234',
    activityName: 'Командная активность',
    activityType: 'Квиз для дизайнеров',
    reward: '100 монет',
    affect: 'Soft skills',
  },
  {
    id: '58w2',
    activityName: 'Корпоративная активность',
    activityType: 'Выступение директора',
    reward: '100 монет',
    affect: 'Soft skills',
  },
];
