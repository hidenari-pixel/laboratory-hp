import { useQuery } from '@tanstack/react-query';

import { getImage } from '../../../shared/lib/firebase';

export const getNewsImage = async (itemName: string) => {
  const blob = await getImage('news', itemName);
  return URL.createObjectURL(blob);
};

export const useNewsImage = (itemName: string) => {
  return useQuery({
    queryKey: [`news-image-${itemName}`],
    queryFn: async () => getNewsImage(itemName),
  });
};
