import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TActivity } from '../../../../utils/mockData/activitiesMockData';

export interface IActivityPreviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  activityData: TActivity;
}
