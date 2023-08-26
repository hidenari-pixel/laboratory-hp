import { Center } from '@chakra-ui/react';

import { Layout } from './Layout';
import { LoadingSpinner } from './LoadingSpinner';
import { SpLayout } from './sp/Layout';

export const PageLoading = () => {
  return (
    <>
      <Layout>
        <Center className="py-[35vh]">
          <LoadingSpinner />
        </Center>
      </Layout>
      <SpLayout>
        <Center className="py-[45vh]">
          <LoadingSpinner />
        </Center>
      </SpLayout>
    </>
  );
};
