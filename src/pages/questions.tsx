import { Box, HStack, SimpleGrid, StackDivider, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import { Layout } from '../shared/components/Layout';
import { Section } from '../shared/components/Section';
import { SpLayout } from '../shared/components/sp/Layout';
import { SpSection } from '../shared/components/sp/Section';

import type { NextPage } from 'next';

const researchFaqs = [
  {
    que: `Q1. 研究はどのように行いますか？`,
    ans: `A1. 人によりますが, 基本的には自分で実際に臨床の場に赴いてデータを集めたり,
  研究室にあるGPUでデータの処理などをして研究を進めています。`,
  },
  {
    que: `Q2. 研究室外で研究を行うことはありますか？`,
    ans: `A2. はい, あります。 こちらも人によりますが,
  共同研究をさせて頂いている先生の在籍する研究室で研究をする人などもいます。`,
  },
  {
    que: `Q3. 研究で壁に当たった場合はどうすればいいですか？`,
    ans: `A3. 基本的に, 研究は壁に当たることがほとんどです。壁に当たった場合は絶望するよりも,
  むしろその状況を楽しみましょう。その過程こそ研究の醍醐味とも言えます。また,
  一人で悩まずとも, 先生や先輩方に話を聞くことも研究の一環と言えます。
  どんどん行動していきましょう。`,
  },
];

const lifeFaqs = [
  {
    que: `Q1. コアタイムはありますか？`,
    ans: `A1.
  コアタイムはありません。基本的には各々が好きな時間で研究をすることができます。しかし,
  ミーティングなどの用事がある場合は原則出席しなければなりません。`,
  },
  {
    que: `Q2. 研究室内の設備はどうなっていますか？`,
    ans: `A2. 研究室内には, エアコン, 冷蔵庫, 電子レンジ, GPU2台が設置されており,
  配属後は一人ずつに机, ディスプレイ, オフィスチェアが貸与されます。また,
  必要性が認められれば, 新たな設備投資を検討してもらえることもあります。`,
  },
  {
    que: `Q3. 研究室には毎日行かなければなりませんか？`,
    ans: `A3. 折田研究室では自主性を重んじているため,
  研究室に来なくとも成果を出せるのであれば必ずしも来なければならない
  といったことはありません。`,
  },
];

const elseFaqs = [
  {
    que: `Q1. 合宿などのイベントはありますか？`,
    ans: `A1. 2020年に新設された研究室であることや,
  コロナ禍によって2021年の時点で合宿などのイベントは開催できていません。しかし,
  コロナ禍の収束後に合宿を行うという話は上がっています。`,
  },
  {
    que: `Q2. 折田先生の経歴はすごいのですか？`,
    ans: `A2. はい,
  すごいです。初めて聞く人は耳を疑うと思います。調べれば出てくると思いますが,
  より詳しく知りたい人は研究室見学に来てみて下さい。
  実際に折田先生と面談することもできます。`,
  },
  {
    que: `Q3. メンバーは仲がいいですか？`,
    ans: `A3. はい, 全員が良好な関係性を築いています。先生を交えて,
  飲み会なども行います。(コロナ禍ではオンライン)`,
  },
];

const AboutFaqs = ({ faqs }: { faqs: { que: string; ans: string }[] }) => (
  <VStack spacing={15} divider={<StackDivider color="gray.200" />} className="pt-5">
    {faqs.map((faq) => (
      <VStack key={faq.que} spacing={5} alignItems="start">
        <Text>{faq.que}</Text>
        <Text className="text-sm text-gray-500">{faq.ans}</Text>
      </VStack>
    ))}
  </VStack>
);

const Questions: NextPage = () => {
  const [tab, setTab] = useState<number>(0);

  const tabElement = (tab: number) => {
    switch (tab) {
      case 0:
        return <AboutFaqs faqs={researchFaqs} />;
      case 1:
        return <AboutFaqs faqs={lifeFaqs} />;
      case 2:
        return <AboutFaqs faqs={elseFaqs} />;
    }
    return null;
  };

  return (
    <>
      <Layout>
        <Section title="よくある質問">
          <SimpleGrid columns={2} spacing={15}>
            <VStack
              className="py-5 px-2"
              alignItems="start"
              divider={<StackDivider color="gray.200" />}
            >
              <Text className="text-xl">生活</Text>
              <VStack alignItems="start" spacing={10}>
                {researchFaqs.map((faq) => (
                  <React.Fragment key={faq.ans}>
                    <Text className="text-lg">{faq.que}</Text>
                    <Text className="text-gray-500">{faq.ans}</Text>
                  </React.Fragment>
                ))}
              </VStack>
            </VStack>
            <VStack
              className="py-5 px-2"
              alignItems="start"
              divider={<StackDivider color="gray.200" />}
            >
              <Text className="text-xl">研究</Text>
              <VStack alignItems="start" spacing={10}>
                {lifeFaqs.map((faq) => (
                  <React.Fragment key={faq.ans}>
                    <Text className="text-lg">{faq.que}</Text>
                    <Text className="text-gray-500">{faq.ans}</Text>
                  </React.Fragment>
                ))}
              </VStack>
            </VStack>
            <VStack
              className="py-5 px-2"
              alignItems="start"
              divider={<StackDivider color="gray.200" />}
            >
              <Text className="text-xl">その他</Text>
              <VStack alignItems="start" spacing={10}>
                {elseFaqs.map((faq) => (
                  <React.Fragment key={faq.ans}>
                    <Text className="text-lg">{faq.que}</Text>
                    <Text className="text-gray-500">{faq.ans}</Text>
                  </React.Fragment>
                ))}
              </VStack>
            </VStack>
          </SimpleGrid>
        </Section>
      </Layout>
      <SpLayout>
        <React.Fragment>
          <div className="h-[9vh]"></div>
          <SpSection title="よくある質問">
            <React.Fragment>
              <HStack className="w-full pt-3" justifyContent="space-around">
                <Box
                  onClick={() => setTab(0)}
                  className={`mx-auto w-1/3 border-b-2 text-center ${
                    tab === 0 ? 'border-blue-500 text-blue-500' : ''
                  }`}
                >
                  <Text>研究</Text>
                </Box>
                <Box
                  onClick={() => setTab(1)}
                  className={`mx-auto w-1/3 border-b-2 text-center ${
                    tab === 1 ? 'border-blue-500 text-blue-500' : ''
                  }`}
                >
                  <Text>生活</Text>
                </Box>
                <Box
                  onClick={() => setTab(2)}
                  className={`mx-auto w-1/3 border-b-2 text-center ${
                    tab === 2 ? 'border-blue-500 text-blue-500' : ''
                  }`}
                >
                  <Text>その他</Text>
                </Box>
              </HStack>
              <Box className="w-full">{tabElement(tab)}</Box>
            </React.Fragment>
          </SpSection>
        </React.Fragment>
      </SpLayout>
    </>
  );
};

export default Questions;
