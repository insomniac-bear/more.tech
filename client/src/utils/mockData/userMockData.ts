type TUserPersonalData = {
  name: string;
  surname: string;
  patronymic: string;
  phoneNumber: string;
  email: string;
  personnelNumber: string;
  personalCode: string;
  laborСontract: string;
};

type TUserCurator = {
  name: string;
  surname: string;
  patronymic: string;
};

type TUser = {
  uuid: string;
  personalData: TUserPersonalData;
  curator: TUserCurator;
};

export const user: TUser = {
  uuid: 'qwerty',
  personalData: {
    name: 'Иванова',
    surname: 'Алла',
    patronymic: 'Петровнаааааааааааааа',
    phoneNumber: '+7 (123) 123 12 34',
    email: 'ivanova@vtb.com',
    personnelNumber: '647333-330',
    personalCode: '769-TYG',
    laborСontract: 'ТД/75648-99',
  },
  curator: {
    name: 'Евгений',
    surname: 'Сидоров',
    patronymic: 'Валентинович',
  },
};
