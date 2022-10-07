/* eslint-disable max-len */
import mockAvatar from '../../images/mockAvatar.png';

export type TUserCurator = {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
};

export type TLeague = {
    userLeagueStatus: string;
    coinBalance: number;
  };

export type TUserPersonalData = {
  phoneNumber: string;
  email: string;
  personnelNumber: string;
  personalCode: string;
  laborСontract: string;
  position: string;
  department: string;
  curator: TUserCurator
  };

export type TUser = {
  uuid: string;
  name: string;
  surname: string;
  patronymic: string;
  image: string;
  status: string;
  league: TLeague;
  personalData: TUserPersonalData;
};

export const user: TUser = {
  uuid: 'qwerty',
  name: 'Иванова',
  surname: 'Алла',
  patronymic: 'Петровнаааааааааааааа',
  image: mockAvatar,
  status: 'В отпуске',
  league: {
    userLeagueStatus: 'gold',
    coinBalance: 55,
  },
  personalData: {
    position: 'Ведущий аналитик',
    department: 'Информационной безопасности',
    personalCode: '769-TYG',
    phoneNumber: '+7 (123) 123 12 34',
    email: 'ivanova@vtb.com',
    personnelNumber: '647333-330',
    laborСontract: 'ТД/75648-99',
    curator: {
      id: 'qwe',
      name: 'Евгений',
      surname: 'Сидоров',
      patronymic: 'Валентинович',
    },
  },
};
