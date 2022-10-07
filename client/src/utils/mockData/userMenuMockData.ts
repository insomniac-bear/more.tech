export type TInnerMenuItemType = {
  id: string;
  title: string;
  link: string;
}

export type TUserMenuMockDataType = {
  id: string;
  title: string;
  link: string;
  innerMenu?: TInnerMenuItemType[];
}

export const userMenuMockData: TUserMenuMockDataType[] = [
  {
    id: '1',
    title: 'Профиль сотрудника',
    link: '/',
    innerMenu: [
      {
        id: '1',
        title: 'test1',
        link: '/',
      },
      {
        id: '2',
        title: 'test2',
        link: '/',
      },
      {
        id: '3',
        title: 'test3',
        link: '/',
      },
    ],
  },
  {
    id: '2',
    title: 'Лига ВТБ',
    link: '/league',
    innerMenu: [
      {
        id: '1',
        title: 'test1',
        link: '/',
      },
      {
        id: '2',
        title: 'test2',
        link: '/',
      },
      {
        id: '3',
        title: 'test3',
        link: '/',
      },
    ],
  },
  {
    id: '3',
    title: 'Мероприятия и курсы',
    link: '/events',
    innerMenu: [
      {
        id: '1',
        title: 'test1',
        link: '/',
      },
      {
        id: '2',
        title: 'test2',
        link: '/',
      },
      {
        id: '3',
        title: 'test3',
        link: '/',
      },
    ],
  },
  {
    id: '4',
    title: 'Телефонный справочник',
    link: '/phonebook',
  },
  {
    id: '5',
    title: 'База знаний',
    link: '/knowledge',
  },
  {
    id: '6',
    title: 'ВТБ Store',
    link: '/store',
    innerMenu: [
      {
        id: '1',
        title: 'test1',
        link: '/',
      },
      {
        id: '2',
        title: 'test2',
        link: '/',
      },
      {
        id: '3',
        title: 'test3',
        link: '/',
      },
    ],
  },
];
