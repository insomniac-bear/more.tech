export interface ISideLinkProps {
  name: string;
  icon: 'UserIcon' | 'CoinIcon' | 'CalendarIcon' | 'StoreIcon' | undefined;
  url: string;
  isActive: boolean;
}
