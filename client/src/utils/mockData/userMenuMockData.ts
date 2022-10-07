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
    title: 'Профиль пилота',
    link: '/profile',
  },
  {
    id: '2',
    title: 'Формула первых',
    link: '/formula',
    innerMenu: [
      {
        id: '1',
        title: 'Мои ресурсы',
        link: '/',
      },
      {
        id: '2',
        title: 'VTB Store',
        link: '/',
      },
      {
        id: '3',
        title: 'Правила игры',
        link: '/',
      },
    ],
  },
  {
    id: '3',
    title: 'Рейтинг первых',
    link: '/ratings',
  },
  {
    id: '4',
    title: 'Список пилотов',
    link: '/pilots',
  },
];
