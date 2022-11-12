import { ChakraProvider, Spinner } from '@chakra-ui/react';

export const LoadingSpinner = () => {
  return (
    <ChakraProvider>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
    </ChakraProvider>
  );
};
