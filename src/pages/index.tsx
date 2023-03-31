/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Box,
  ChakraProvider,
  HStack,
  Image,
  SimpleGrid,
  SkeletonText,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';

import JoinImg from '../../public/home/join.jpeg';
import LifeImg from '../../public/home/life.jpg';
import MemberImg from '../../public/home/member_2022.jpg';
import QuestionsImg from '../../public/home/questions.jpg';
import ResearchImg from '../../public/home/research.jpg';
import MapImage from '../../public/lab_map.png';
import TopImage from '../../public/top_image.jpeg';
import { useUpdates } from '../features/home/api/getUpdates';
import { PageContent } from '../features/home/components/PageContent';
import { useNews } from '../features/news/api/getNews';
import { NewsContent } from '../features/news/components/NewsContent';
import { Layout } from '../shared/components/Layout';
import { Section } from '../shared/components/Section';
import { SpLayout } from '../shared/components/sp/Layout';
import { SpSection } from '../shared/components/sp/Section';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const newsQuery = useNews(4);
  const updatesQuery = useUpdates();
  const news = newsQuery.data || [];
  const sortedNews = news.sort((a, b) => b.date.seconds - a.date.seconds);
  const updates = updatesQuery.data || [];
  const sortedUpdates = updates.sort((a, b) => b.date.seconds - a.date.seconds);

  return (
    <>
      {/* Desktop表示 */}
      <Layout>
        <Box className="">
          {/* メイン画像 */}
          <Box className="bg-zinc-800">
            <Image
              src={TopImage.src}
              alt="トップ画像"
              className="mx-auto aspect-[16/9] w-[60vw]"
            ></Image>
          </Box>
          {/* 更新情報 */}
          <Section title="更新情報">
            <React.Fragment>
              {updatesQuery.isLoading ? (
                <ChakraProvider>
                  <SkeletonText className="w-full"></SkeletonText>
                </ChakraProvider>
              ) : (
                sortedUpdates.map((item) => {
                  const date = format(new Date(item.date.seconds * 1000), 'yyyy-MM-dd');
                  return (
                    <Text key={`${date}-${item.title}`}>
                      <span className="pr-2 text-sm">{date}</span> {item.title}
                    </Text>
                  );
                })
              )}
            </React.Fragment>
          </Section>
          {/* 研究室の簡易的な説明 */}
          <Section title="本研究室について">
            <Box className="flex justify-center">
              折田研究室では主に脊椎系の研究を行っています。
              在籍している学生は主に機械学習を用いた研究を行なっていますが, VRの医療への介入,
              ハプティクス技術に関する研究などにも焦点を当てており,
              先進技術への感度が高い研究室です。 折田純久教授は脊椎領域専門の外科医でありつつ,
              工学修士の称号も持っている医学と工学のエキスパートです。 そのため,
              より医療に近い視点を持つことができる数少ない医工学系研究室です。
              本研究室は医療・工学の2つの視点を持つ折田純久教授を筆頭に,
              医療業界を支えていくことを目標としています。
            </Box>
          </Section>
          {/* NEWS */}
          <Section title="NEWS">
            <React.Fragment>
              <SimpleGrid columns={2} spacing={10}>
                {newsQuery.isLoading
                  ? null
                  : sortedNews.map((item) => {
                      const formatDate = format(new Date(item.date.seconds * 1000), 'yyyy-MM-dd');
                      return (
                        <Box key={`${formatDate}-${item.title}`}>
                          <Link href={`/news#${item.title}`}>
                            <a>
                              <NewsContent
                                id={item.id}
                                title={item.title}
                                date={new Date(item.date.seconds * 1000)}
                                description={`${item.description.slice(0, 80)}...`}
                              />
                            </a>
                          </Link>
                        </Box>
                      );
                    })}
              </SimpleGrid>
              <Box className="pt-8 text-sm text-gray-500 hover:text-gray-300">
                <Link href="/news">続きはこちら</Link>
              </Box>
            </React.Fragment>
          </Section>
          {/* メンバー */}
          <Section title="メンバー">
            <VStack spacing={5} className=" w-2/6 whitespace-nowrap">
              <HStack className="w-full justify-between text-xl">
                <Text>教授</Text>
                <Text>1名</Text>
              </HStack>
              <HStack className="w-full justify-between text-xl">
                <Text>秘書</Text>
                <Text>1名</Text>
              </HStack>
              <HStack className="w-full justify-between text-xl">
                <Text>修士1年</Text>
                <Text>4名</Text>
              </HStack>
              <HStack className="w-full justify-between text-xl">
                <Text>学士4年</Text>
                <Text>4名</Text>
              </HStack>
              <HStack className="w-full justify-between text-xl">
                <Text>学士3年</Text>
                <Text>4名</Text>
              </HStack>
            </VStack>
          </Section>
          <Section title="コンテンツ">
            <SimpleGrid columns={2} spacing={15}>
              <PageContent
                img={ResearchImg}
                title="RESEARCH"
                description="研究室について紹介しています"
                path="/research"
              />
              <PageContent
                img={MemberImg}
                title="MEMBER"
                description="研究室のメンバーを紹介します"
                path="/member"
              />
              <PageContent
                img={LifeImg}
                title="NEWS"
                description="研究室内のイベントを掲載しています"
                path="/news"
              />
              <PageContent
                img={TopImage}
                title="CONTACT"
                description="研究室について紹介しています"
                path="/contact"
              />
              <PageContent
                img={QuestionsImg}
                title="QUESTIONS"
                description="よくある質問をまとめています"
                path="/questions"
              />
              <PageContent
                img={JoinImg}
                title="JOIN"
                description="研究室配属について紹介します"
                path="/join"
              />
            </SimpleGrid>
          </Section>
        </Box>
      </Layout>
      {/* Sp表示 */}
      <SpLayout>
        <React.Fragment>
          {/* ヘッダーのパディング用要素 */}
          <div className="h-[9vh]"></div>
          {/* トップ画像 */}
          <Image src={TopImage.src} alt=""></Image>
          {/* 更新情報類 */}
          <SpSection title="更新情報">
            <VStack spacing={6}>
              {updatesQuery.isLoading
                ? null
                : sortedUpdates.map((item) => {
                    const date = format(new Date(item.date.seconds * 1000), 'yyyy-MM-dd');
                    return (
                      <Text key={`${date}-${item.title}`}>
                        <span className="pr-1 text-sm">{date}</span> {item.title}
                      </Text>
                    );
                  })}
            </VStack>
          </SpSection>
          {/* 研究室の簡易的な説明 */}
          <SpSection title="本研究室について">
            <Box className="flex justify-center">
              折田研究室では主に脊椎系の研究を行っています。
              在籍している学生は主に機械学習を用いた研究を行なっていますが, VRの医療への介入,
              ハプティクス技術に関する研究などにも焦点を当てており,
              先進技術への感度が高い研究室です。 折田純久教授は脊椎領域専門の外科医でありつつ,
              工学修士の称号も持っている医学と工学のエキスパートです。 そのため,
              より医療に近い視点を持つことができる数少ない医工学系研究室です。
              本研究室は医療・工学の2つの視点を持つ折田純久教授を筆頭に,
              医療業界を支えていくことを目標としています。
            </Box>
          </SpSection>
          {/* News */}
          <SpSection title="NEWS">
            <React.Fragment>
              {newsQuery.isLoading
                ? null
                : sortedNews.map((item) => {
                    const formatDate = format(new Date(item.date.seconds * 1000), 'yyyy-MM-dd');
                    return (
                      <Box key={`${formatDate}-${item.title}`}>
                        <Link href={`/news#${item.title}`}>
                          <a>
                            <NewsContent
                              id={item.id}
                              date={new Date(item.date.seconds * 1000)}
                              title={item.title}
                              description={`${item.description.slice(0, 80)}...`}
                            />
                          </a>
                        </Link>
                      </Box>
                    );
                  })}
              <Box className="w-full pt-3 pr-1 text-right text-sm">
                <Link href="/news">続きはこちら</Link>
              </Box>
            </React.Fragment>
          </SpSection>
          {/* メンバー */}
          <SpSection title="メンバー">
            <VStack alignItems="start" spacing={5} className="w-full">
              <HStack className="w-full" justifyContent="space-between">
                <Text className="text-lg">教授</Text>
                <Text>1名</Text>
              </HStack>
              <HStack className="w-full" justifyContent="space-between">
                <Text className="text-lg">秘書</Text>
                <Text>1名</Text>
              </HStack>
              <HStack className="w-full" justifyContent="space-between">
                <Text className="text-lg">修士1年</Text>
                <Text>4名</Text>
              </HStack>
              <HStack className="w-full" justifyContent="space-between">
                <Text className="text-lg">学士4年</Text>
                <Text>4名</Text>
              </HStack>
              <HStack className="w-full" justifyContent="space-between">
                <Text className="text-lg">学士3年</Text>
                <Text>4名</Text>
              </HStack>
            </VStack>
          </SpSection>
          {/* アクセス */}
          <SpSection title="アクセス">
            <VStack>
              <Box className="mb-2">
                <Text className="mb-2">〒263-8522</Text>
                <Text>千葉県千葉市稲毛区弥生町1-33 フロンティア医工学センターA棟206号室</Text>
              </Box>
              <Box className="border border-slate-300">
                <Image src={MapImage.src} alt="マップ" className="aspect-[1/1]" />
              </Box>
            </VStack>
          </SpSection>
          {/* コンタクト */}
          <SpSection title="コンタクト">
            <VStack
              alignItems="start"
              spacing={5}
              className="w-full"
              divider={<StackDivider color="gray.200" />}
            >
              <HStack className="w-full" justifyContent="space-between">
                <Text className="text-lg">Tell</Text>
                <Text>043-251-1111</Text>
              </HStack>
              <HStack className="w-full" justifyContent="space-between">
                <Text className="text-lg">Email</Text>
                <Text>orita.lab.students@gmail.com</Text>
              </HStack>
              <HStack className="w-full" justifyContent="space-between">
                <Text className="text-lg">Twitter</Text>
                <a
                  href="https://twitter.com/oritalabstudent"
                  rel="noreferrer"
                  target={'_blank'}
                  className="text-blue-500 underline"
                >
                  twitter.com/oritalabstudent
                </a>
              </HStack>
            </VStack>
          </SpSection>
        </React.Fragment>
      </SpLayout>
    </>
  );
};

export default Home;
