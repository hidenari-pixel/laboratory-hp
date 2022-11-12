import { Center, Text } from '@chakra-ui/react';

import { Layout } from '../shared/components/Layout';
import { SpLayout } from '../shared/components/sp/Layout';

import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Layout>
        <Center className="bg-gray-300 py-[33vh]">
          <Text className="text-center text-5xl">404 | Not Found</Text>
        </Center>
      </Layout>
      <SpLayout>
        <Center className="bg-gray-300 py-[45vh]">
          <Text className="text-xl">404 | Not Found</Text>
        </Center>
      </SpLayout>
    </>
  );
};

export default NotFoundPage;
