import { ChakraProvider, Image, Skeleton } from '@chakra-ui/react';

import { useResearchImage } from '../api/getResearchImage';

type ResearchImageProps = {
  alt: string;
  itemName: string;
};

export const ResearchImage = ({ alt, itemName }: ResearchImageProps) => {
  const imageQuery = useResearchImage(itemName);
  const src = imageQuery.data;

  if (imageQuery.isLoading || !src) {
    return (
      <ChakraProvider>
        <Skeleton className="aspect-[1/1]" />
      </ChakraProvider>
    );
  }

  return <Image alt={alt} src={src} className="aspect-[1/1]" />;
};
