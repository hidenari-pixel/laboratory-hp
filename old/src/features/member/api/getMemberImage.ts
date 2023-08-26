import { useQuery } from '@tanstack/react-query';

import { getImage } from '../../../shared/lib/firebase';

export const getMemberImage = async (itemName: string) => {
  const blob = await getImage('members', itemName);
  return URL.createObjectURL(blob);
};

export const useMemberImage = (itemName: string) => {
  return useQuery({
    queryKey: [`member-image-${itemName}`],
    queryFn: async () => getMemberImage(itemName),
  });
};
