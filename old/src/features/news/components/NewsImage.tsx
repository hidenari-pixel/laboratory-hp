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
    window.addEventListener('beforeunload', () => {
      imageQuery.remove();
      if (src) {
        URL.revokeObjectURL(src);
      }
    });
  });

  if (imageQuery.isLoading || !src) {
    return (
      <ChakraProvider>
        <Skeleton className="aspect-[16/9]" />
      </ChakraProvider>
    );
  }

  return (
    <div className="aspect-[16/9] bg-gray-400">
      <Image src={src} className="h-full w-full object-contain" alt={alt} />
    </div>
  );
};
