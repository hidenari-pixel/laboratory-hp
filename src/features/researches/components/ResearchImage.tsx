import { ChakraProvider, Image, Skeleton } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useResearchImage } from '../api/getResearchImage';

type ResearchImageProps = {
  alt: string;
  itemName: string;
};

export const ResearchImage = ({ alt, itemName }: ResearchImageProps) => {
  const imageQuery = useResearchImage(itemName);
  const src = imageQuery.data;

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      imageQuery.remove();
      if (src) {
        URL.revokeObjectURL(src);
      }
    });
  }, []);

  if (imageQuery.isLoading || !src) {
    return (
      <ChakraProvider>
        <Skeleton className="aspect-[1/1]" />
      </ChakraProvider>
    );
  }

  return <Image alt={alt} src={src} className="aspect-[1/1]" />;
};
