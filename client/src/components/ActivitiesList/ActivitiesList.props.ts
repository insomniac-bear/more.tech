import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TActivity } from '../../utils/mockData/activitiesMockData';

export interface IActivityListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  activities: TActivity[];
}
