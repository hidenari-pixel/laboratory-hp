import { Box, StackDivider, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

type SectionProps = {
  title: string;
  children: ReactElement;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <VStack
      className="mx-auto my-10 w-[60vw]"
      divider={<StackDivider borderWidth={3} color="gray.200" />}
      alignItems="start"
    >
      <Box className="text-2xl text-gray-500">{title}</Box>
      {children}
    </VStack>
  );
};
