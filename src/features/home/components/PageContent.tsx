import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

type PageContentProps = {
  img: StaticImageData;
  title: string;
  description: string;
  path: string;
};

export const PageContent = ({ img, title, description, path }: PageContentProps) => {
  const router = useRouter();

  return (
    <VStack className="w-full" alignItems="start">
      <Box
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => router.push(path)}
        className="mx-auto cursor-pointer bg-gray-100 hover:text-orange-400"
      >
        <Image src={img.src} alt="" className="mx-auto aspect-[16/9]"></Image>
        <Text className="px-2 py-5 text-xl">{title}</Text>
        <Text className="px-2 pb-5">{description}</Text>
      </Box>
    </VStack>
  );
};
