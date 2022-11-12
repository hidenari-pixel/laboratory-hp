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
    return () => {
      if (src) {
        URL.revokeObjectURL(src);
      }
    };
  });

  if (imageQuery.isLoading || !src) {
    return (
      <ChakraProvider>
        <Skeleton className={`aspect-[3/4] ${className}`} />
      </ChakraProvider>
    );
  }

  return <Image className={`aspect-[3/4] ${className}`} src={src} alt={alt} />;
};
