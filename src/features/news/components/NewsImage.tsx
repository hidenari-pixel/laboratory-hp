import { ChakraProvider, Image, Skeleton } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useNewsImage } from '../api/getNewsImage';

type NewsImageProps = {
  imageName: string;
  alt: string;
};

export const NewsImage = ({ imageName, alt }: NewsImageProps) => {
  const imageQuery = useNewsImage(imageName);
  const src = imageQuery.data;

  useEffect(() => {
    return () => {
      if (src) {
        URL.revokeObjectURL(src);
      }
    };
  });

  if (imageQuery.isLoading || !src) {
    return (
      <ChakraProvider>
        <Skeleton className="aspect-[16/9]" />
      </ChakraProvider>
    );
  }

  return <Image src={src} className="aspect-[16/9]" alt={alt} />;
};
