import { ChakraProvider, Image, Skeleton } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useMemberImage } from '../api/getMemberImage';

type MemberImageProps = {
  imageName: string;
  alt: string;
  sp?: boolean;
  className?: string;
};

export const MemberImage = ({ imageName, alt, className = '' }: MemberImageProps) => {
  const imageQuery = useMemberImage(imageName);
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
        <Skeleton className={`aspect-[3/4] pc:min-w-[200px] ${className}`} />
      </ChakraProvider>
    );
  }

  return (
    <Image
      className={`aspect-[3/4] bg-gray-200 object-contain object-center pc:min-w-[200px] ${className}`}
      src={src}
      alt={alt}
    />
  );
};
