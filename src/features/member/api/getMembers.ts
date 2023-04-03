import { useQuery } from '@tanstack/react-query';

import { getCollection } from '../../../shared/lib/firebase';
import { Member } from '../types/member';

export const getMembers = async () => {
  const members = await getCollection<Member>('members', { orderby: { target: 'name_en' } });
  return members;
};

export const useMembers = () => {
  return useQuery({
    queryKey: ['members'],
    queryFn: async () => getMembers(),
    staleTime: Infinity, // フェッチ回数を減らす為
  });
};
