/* eslint-disable @typescript-eslint/no-misused-promises */
import { HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import { Layout } from '../shared/components/Layout';
import { SpLayout } from '../shared/components/sp/Layout';
import { SpSection } from '../shared/components/sp/Section';

import type { NextPage } from 'next';

const SectionTitle = ({ title, sp }: { title: string; sp?: boolean }) => {
  if (sp) {
    return (
      <HStack className="py-5">
        <div className="w-[18vw] border-b border-gray-300"></div>
        <Text className="text-base">{title}</Text>
        <div className="w-[18vw] border-b border-gray-300"></div>
      </HStack>
    );
  }

  return (
    <div className="flex items-center py-10">
      <div className="w-[50px] border-b"></div>
      {'　'}
      {title}
      {'　'}
      <div className="w-[50px] border-b"></div>
    </div>
  );
};

const Row = ({ children }: { children: ReactNode }) => {
  return <div className="py-2">{children}</div>;
};

const Join: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center py-12">
          <div className="pb-10 text-2xl">研究室配属について</div>
          <div className="flex w-4/5 flex-col items-center bg-zinc-700 p-10 text-white">
            {/* 第1セクション */}
            <SectionTitle title="まずはじめに" />
            <div className="pb-5">このページでは主に</div>
            <div className="py-3 text-lg">折田研究室がどのような場所であるのか</div>
            <div className="py-3 text-lg">どのような研究ができるのか</div>
            <div className="pt-3 pb-5 text-lg">折田研究室の生活がどのようなものか</div>
            <Row>という点に焦点を当てて折田研究室の配属についての説明をしています。</Row>
            <Row>すでに配属希望がある人は, 下記リンクから見学希望を提出してください。</Row>
            <div className="py-10 text-lg">
              <a
                href="https://forms.gle/k8sCzCFR6pXvR4P79"
                rel="noreferrer"
                target={'_blank'}
                className="border-b border-sky-500 text-sky-500 hover:border-sky-200 hover:text-sky-300"
              >
                Googleフォームへ移動
              </a>
            </div>
            {/* 第2セクション */}
            <SectionTitle title="折田研究室とは" />
            <Row>折田研究室は2020年に新設された研究室です</Row>
            <Row>
              そのため, 研究だけでなく生活においても{'"'}自由度{'"'}の高い研究室です。
            </Row>
            <Row>
              しかし, ここでの {'"'}自由{'"'} という言葉は怠惰を容認するものではありません。
            </Row>
            <Row>その意味を理解し, 研究に対する熱意を持っている方を折田研究室は歓迎します。</Row>
            {/* 第3セクション */}
            <SectionTitle title="研究について" />
            <Row>折田研究室では, 主に脊椎・脊髄領域に関する研究を行なっています。</Row>
            <Row>
              詳しくは,{' '}
              <a
                onClick={() => router.push('/research')}
                className="cursor-pointer border-b border-sky-500 text-sky-500 hover:border-sky-200 hover:text-sky-300"
              >
                RESEARCH
              </a>{' '}
              のページをご覧ください。
            </Row>
            <Row>だからといって, 必ずしもこれに従う必要はありません。</Row>
            <Row>折田研究室では自主性を何よりも尊重するため, 他に興味のある分野の研究や</Row>
            <Row>研究以外であっても挑戦したいものがあれば, 思う存分挑戦して頂けます。</Row>
            {/* 第4セクション */}
            <SectionTitle title="研究室生活" />
            <Row>折田研究室の特徴の一つとして, コアタイムがないことが挙げられます。</Row>
            <Row>そのため, 研究室に長時間拘束されるといったことはありません。</Row>
            <Row>極論を言えば, ミーティングなどの研究室での用事などがなければ, </Row>
            <Row>研究室に必ずいなければならないということはありません。</Row>
            <Row>
              それでいながら, 折田研究室の学生は共通して,
              やるべきことは必ずやるということを守っています。
            </Row>
            <Row>
              詳しくは,{' '}
              <a
                onClick={() => router.push('/life')}
                className="cursor-pointer border-b border-sky-500 text-sky-500 hover:border-sky-200 hover:text-sky-300"
              >
                LIFE
              </a>{' '}
              のページをご覧ください。
            </Row>
            {/* 第5セクション */}
            <SectionTitle title="オープンラボ" />
            <Row>オープンラボでは, 実際に研究室に来てどのような研究を行っているのか,</Row>
            <Row>研究室内の雰囲気はどうなっているのかを知ることができます。</Row>
            <Row>見学者を魅了できるようなコンテンツを用意することを約束します。</Row>
            <Row>
              また, 折田純久先生と面談をすることもでき, 研究についての興味・関心が より高まります。
            </Row>
            {/* 第6セクション */}
            <SectionTitle title="配属後の流れ" />
            <Row>配属後は, 早速研究を始めるという流れではなく, まずは自身の興味のある分野を</Row>
            <Row>見つけて頂きます。その機会は, 自身で設けて頂くことも可能ですが, </Row>
            <Row>折田先生の手術見学に参加することが最も貴重な機会であると思われます。</Row>
            <Row>研究分野が定まった後は中間発表に向けて研究を進めていきます。</Row>
            <Row>また, 学部3年生は他研究室と合同で行うスキルゼミに参加することができます。</Row>
            <Row>そこで今後研究では必要不可欠なプログラミングの基礎を磨くことができます。</Row>
            {/* 第7セクション */}
            <SectionTitle title="最後に" />
            <Row>
              ここまで読んで下さった方は, きっと折田研究室に興味を抱いてくれている人なのだと
            </Row>
            <Row>
              思います。もしこれらの説明で満足できなかった方はぜひ研究室見学にお越しください。
            </Row>
            <Row>
              また, 不明点, 質問事項などがあれば{' '}
              <a
                onClick={() => router.push('/contact')}
                className="cursor-pointer border-b border-sky-500 text-sky-500 hover:border-sky-200 hover:text-sky-300"
              >
                CONTACT
              </a>{' '}
              ページに記載している連絡先や,{' '}
            </Row>
            <Row>
              <a
                href="https://twitter.com/oritalabstudent"
                rel="noreferrer"
                target={'_blank'}
                className="border-b border-sky-500 text-sky-500 hover:border-sky-200 hover:text-sky-300"
              >
                折田研究室公式Twitter
              </a>{' '}
              にご連絡頂ければ対応致します。
            </Row>
          </div>
        </div>
      </Layout>
      <SpLayout>
        <React.Fragment>
          <div className="h-[9vh]"></div>
          <SpSection title="研究室配属について">
            <VStack className="w-full px-2 text-center text-sm">
              {/* 第一セクション */}
              <SectionTitle sp={true} title="まず初めに" />
              <Text>このページでは主に</Text>
              <VStack className="py-5 text-base" spacing={10}>
                <Text>折田研究室がどのような場所であるのか</Text>
                <Text>どのような研究ができるのか</Text>
                <Text>折田研究室の生活がどのようなものか</Text>
              </VStack>
              <Text className="leading-6">
                という点に焦点を当てて折田研究室の配属についての説明をしています。すでに配属希望がある人は,
                下記リンクから見学希望を提出してください。
              </Text>
              <Text className="border-sky-500 py-2 text-sky-500 underline hover:border-sky-200 hover:text-sky-300">
                <a href="https://forms.gle/k8sCzCFR6pXvR4P79" rel="noreferrer" target={'_blank'}>
                  Googleフォームへ移動
                </a>
              </Text>
              {/* 第二セクション */}
              <SectionTitle sp={true} title="折田研究室とは" />
              <Text className="leading-6">
                オープンラボでは, 実際に研究室に来てどのような研究を行っているのか,
                研究室内の雰囲気はどうなっているのかを知ることができます。
                見学者を魅了できるようなコンテンツを用意することを約束します。 また,
                折田純久先生と面談をすることもでき, 研究についての興味・関心が より高まります。
              </Text>
              {/* 第三セクション */}
              <SectionTitle sp={true} title="配属後の流れ" />
              <Text className="leading-6">
                配属後は, 早速研究を始めるという流れではなく,
                まずは自身の興味のある分野を見つけて頂きます。 その機会は,
                自身で設けて頂くことも可能ですが,
                折田先生の手術見学に参加することが最も貴重な機会であると思われます。
                研究分野が定まった後は中間発表に向けて研究を進めていきます。 また,
                学部3年生は他研究室と合同で行うスキルゼミに参加することができます。
                そこで今後研究では必要不可欠なプログラミングの基礎を磨くことができます。
              </Text>
              {/* 第四セクション */}
              <SectionTitle sp={true} title="最後に" />
              <Text className="leading-6">
                ここまで読んで下さった方は, きっと折田研究室に興味を抱いてくれている人なのだと
                思います。もしこれらの説明で満足できなかった方はぜひ研究室見学にお越しください。
                また, 不明点, 質問事項などがあれば{' '}
                <a
                  onClick={() => router.push('/contact')}
                  className="cursor-pointer text-sky-500 underline"
                >
                  アクセスページ
                </a>{' '}
                に記載している連絡先や, 折田研究室{'　'}
                <a
                  href="https://twitter.com/oritalabstudent"
                  rel="noreferrer"
                  target={'_blank'}
                  className="text-sky-500 underline"
                >
                  公式Twitter
                </a>
                にご連絡頂ければ対応致します。
              </Text>
            </VStack>
          </SpSection>
        </React.Fragment>
      </SpLayout>
    </>
  );
};

export default Join;
