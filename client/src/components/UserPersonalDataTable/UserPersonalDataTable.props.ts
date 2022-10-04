import { DetailedHTMLProps, TableHTMLAttributes } from 'react';
import { TUserPersonalData } from '../../utils/mockData/userMockData';

export interface IUserPersonalDataTableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  data: TUserPersonalData;
}
