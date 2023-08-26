import { FirebaseTimestamp } from '../../../shared/types';

export type News = {
  id: string;
  date: FirebaseTimestamp;
  title: string;
  description: string;
  links: string[];
};
