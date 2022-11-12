import { useQuery } from '@tanstack/react-query';

import { getImage } from '../../../shared/lib/firebase';

export const getResearchImage = async (itemName: string) => {
  const blob = await getImage('researches', itemName);
  return URL.createObjectURL(blob);
};

export const useResearchImage = (itemName: string) => {
  return useQuery({
    queryKey: [`research-image-${itemName}`],
    queryFn: async () => getResearchImage(itemName),
  });
};
