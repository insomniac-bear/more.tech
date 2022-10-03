/* eslint-disable max-len */

type TUserCurator = {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
};

type TLeague = {
    userLeagueStatus: string;
    coinBalance: number;
  };

  type TUserPersonalData = {
    phoneNumber: string;
    email: string;
    personnelNumber: string;
    personalCode: string;
    laborСontract: string;
    position: string;
    department: string;
    curator: TUserCurator
  };

type TUser = {
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
  image: 'https://images.unsplash.com/photo-1664737426331-a1cde6c831d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80',
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
