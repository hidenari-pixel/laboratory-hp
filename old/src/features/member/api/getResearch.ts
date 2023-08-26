import { useQuery } from '@tanstack/react-query';

import { getDocument } from '../../../shared/lib/firebase';
import { Research } from '../../researches/types/research';

export const getResearch = async (id: string) => {
  const research = await getDocument<Research>('researches', id);
  return research;
};

export const useMemberResearch = (id: string) => {
  return useQuery({
    queryKey: [`research-${id}`],
    queryFn: async () => getResearch(id),
    staleTime: Infinity, // フェッチ回数を減らす為
  });
};
