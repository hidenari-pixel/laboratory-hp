import { useQuery } from '@tanstack/react-query';

import { getCollection } from '../../../shared/lib/firebase';
import { Research } from '../types/research';

export const getResearches = async () => {
  const researches = await getCollection<Research>('researches');
  return researches;
};

export const useResearches = () => {
  return useQuery({
    queryKey: ['researches'],
    queryFn: async () => getResearches(),
    staleTime: Infinity, // フェッチ回数を減らす為
  });
};
