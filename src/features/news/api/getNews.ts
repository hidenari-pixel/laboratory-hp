import { useQuery } from '@tanstack/react-query';

import { getCollection } from '../../../shared/lib/firebase';
import { News } from '../types/news';

export const getNews = async (limit?: number) => {
  const news = await (async () => {
    if (limit) {
      return await getCollection<News>('news', { limit });
    }
    return await getCollection<News>('news');
  })();
  return news;
};

export const useNews = (limit?: number) => {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => getNews(limit),
    staleTime: Infinity, // フェッチ回数を減らす為
  });
};
