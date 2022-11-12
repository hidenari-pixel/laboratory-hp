import { useQuery } from '@tanstack/react-query';

import { getCollection } from '../../../shared/lib/firebase';
import { Update } from '../types/update';

export const getUpdates = async () => {
  const updates = await getCollection<Update>('updates', {
    limit: 10,
    orderby: { target: 'date' },
  });
  return updates;
};

export const useUpdates = () => {
  return useQuery({
    queryKey: ['updates'],
    queryFn: async () => getUpdates(),
    staleTime: Infinity, // フェッチ回数を減らす為
  });
};
