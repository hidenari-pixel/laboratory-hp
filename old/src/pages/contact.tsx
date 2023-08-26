import { Box, HStack, Image, StackDivider, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import MapImage from '../../public/lab_map.png';
import { Layout } from '../shared/components/Layout';
import { Section } from '../shared/components/Section';
import { SpLayout } from '../shared/components/sp/Layout';
import { SpSection } from '../shared/components/sp/Section';

import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <>
      <Layout>
        <Section title="アクセス">
          <React.Fragment>
            <VStack
              className="w-full py-5"
              alignItems="start"
              spacing={10}
              divider={<StackDivider color="gray.200" />}
            >
              <Text className="text-xl">所在地</Text>
              <VStack alignItems="start">
                <Text>千葉県千葉市稲毛区弥生町1-33 フロンティア医工学センターA棟206号室</Text>
                <Image src={MapImage.src} alt="" className="aspect-[1/1] w-[80vh]" />
              </VStack>
            </VStack>
            <VStack
              className="w-full py-5"
              alignItems="start"
              spacing={10}
              divider={<StackDivider color="gray.200" />}
            >
              <Text className="text-xl">組織リンク</Text>
              <VStack alignItems="start">
                <Text className="text-blue-500 underline">
                  <a href="https://www.cfme.chiba-u.jp/" rel="noreferrer" target={'_blank'}>
                    フロンティア医工学センターHP
                  </a>
                </Text>
              </VStack>
            </VStack>
            <VStack
              className="w-full py-5"
              alignItems="start"
              spacing={10}
              divider={<StackDivider color="gray.200" />}
            >
              <Text className="text-xl">お問合せ</Text>
              <VStack alignItems="start">
                <Text>〒 263-8522</Text>
                <Text>Tell 043-251-1111</Text>
                <Text>Email orita.lab.students@gmail.com</Text>
                <Text className="text-blue-500 underline">
                  <a href="https://twitter.com/oritalabstudent" rel="noreferrer" target={'_blank'}>
                    Twitter
                  </a>
                </Text>
              </VStack>
            </VStack>
          </React.Fragment>
        </Section>
      </Layout>
      <SpLayout>
        <React.Fragment>
          <div className="h-[9vh]"></div>
          <SpSection title="アクセス">
            <React.Fragment>
              <Box className="w-full py-3">
                <Text className="w-full border-b border-gray-300 text-lg">所在地</Text>
                <Text className="pt-3">〒 263-8522</Text>
                <Text className="pt-1">
                  千葉県千葉市稲毛区弥生町1-33 フロンティア医工学センターA棟206号室
                </Text>
                <Box className="my-5 border border-slate-300">
                  <Image src={MapImage.src} alt="マップ" className="aspect-[1/1]" />
                </Box>
              </Box>
              <Box className="w-full py-3">
                <Text className="w-full border-b border-gray-300 text-lg">組織リンク</Text>
                <Text className="pt-3 text-blue-500 underline">
                  <a href="https://www.cfme.chiba-u.jp/" rel="noreferrer" target={'_blank'}>
                    フロンティア医工学センター公式HP
                  </a>
                </Text>
              </Box>
            </React.Fragment>
          </SpSection>
          <SpSection title="コンタクト">
            <Box className="w-full py-3">
              <Text className="w-full border-b border-gray-300 text-lg">お問合せ</Text>
              <VStack
                spacing={3}
                alignItems="start"
                className="pt-3"
                divider={<StackDivider color="gray.200" />}
              >
                <HStack className="w-full justify-between">
                  <Text>Tell</Text>
                  <Text className="text-sm">043-251-1111</Text>
                </HStack>
                <HStack className="w-full justify-between">
                  <Text>Email</Text>
                  <Text className="text-sm underline">orita.lab.students@gmail.com</Text>
                </HStack>
                <Text className="text-blue-500 underline">
                  <a href="https://twitter.com/oritalabstudent" rel="noreferrer" target={'_blank'}>
                    Twitter
                  </a>
                </Text>
              </VStack>
            </Box>
          </SpSection>
        </React.Fragment>
      </SpLayout>
    </>
  );
};

export default Contact;
