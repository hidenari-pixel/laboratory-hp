import { Box, HStack, Image, SimpleGrid, StackDivider, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import Emori from '../../../public/members/teachers/emori.jpg';
import OritaImage from '../../../public/members/teachers/orita_sumihisa.jpg';
import { useMembers } from '../../features/member/api/getMembers';
import { MemberCell } from '../../features/member/components/MemberCell';
import { Member } from '../../features/member/types/member';
import { Layout } from '../../shared/components/Layout';
import { PageLoading } from '../../shared/components/PageLoading';
import { Section } from '../../shared/components/Section';
import { SpLayout } from '../../shared/components/sp/Layout';
import { SpSection } from '../../shared/components/sp/Section';

import type { NextPage } from 'next';

const GradeRow = ({ members, gradeStr }: { members: Member[]; gradeStr: string }) => {
  if (members.length === 0) {
    return null;
  }

  return (
    <VStack
      className="mx-auto my-10 w-full"
      divider={<StackDivider color="gray.200" />}
      alignItems="start"
    >
      <Text className="text-xl text-gray-500">{gradeStr}</Text>
      <SimpleGrid className="w-full" columns={2} spacing={10}>
        {members.map((member) => (
          <MemberCell key={member.id} member={member} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

// 5 → m2
// 4 → m1
// 3 → b4
// 2 → b3
const createGradeMembers = (members: Member[], grade: number) => {
  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const thisYear = thisMonth < 4 ? date.getFullYear() - 1 : date.getFullYear();
  return members.filter((member) => {
    if (thisYear - member.year === grade) {
      return member;
    }
  });
};

const Member: NextPage = () => {
  const membersQuery = useMembers();

  const members = membersQuery.data;

  if (membersQuery.isLoading || !members) {
    return <PageLoading />;
  }

  const m2 = createGradeMembers(members, 5);
  const m1 = createGradeMembers(members, 4);
  const b4 = createGradeMembers(members, 3);
  const b3 = createGradeMembers(members, 2);

  return (
    <>
      <Layout>
        <Box className="mx-auto w-[60vw]">
          <Section title="メンバー">
            <VStack className="w-full">
              {/* 教授 */}
              <VStack
                className="mx-auto my-10 w-full"
                divider={<StackDivider color="gray.200" />}
                alignItems="start"
              >
                <Text className="text-xl text-gray-500">教授 Professor</Text>
                <HStack className="w-full" alignItems="flex-start">
                  <Image
                    src={OritaImage.src}
                    alt="professor orita"
                    className="aspect-[3/4] w-[15vw]"
                  />
                  <VStack alignItems="start">
                    <Text className="p-2 text-lg">折田 純久 / Sumihisa Orita</Text>
                    <VStack spacing={5} className="px-4 text-sm text-gray-500" alignItems="start">
                      <Text>職位 / 教授 / 医師</Text>
                      <Text>学位 / 工学修士 / 医学博士</Text>
                      <Text className="text-blue-500 underline hover:text-blue-400">
                        <a
                          href="https://www.cfme.chiba-u.jp/staff/detail.php?index=orita"
                          rel="noreferrer"
                          target={'_blank'}
                        >
                          プロフィール
                        </a>
                      </Text>
                      <Text className="text-blue-500 underline hover:text-blue-400">
                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/?term=sumihisa+orita&sort=date"
                          rel="noreferrer"
                          target={'_blank'}
                        >
                          関連研究
                        </a>
                      </Text>
                    </VStack>
                  </VStack>
                </HStack>
              </VStack>
              {/* 修士2年 */}
              <GradeRow gradeStr="修士2年" members={m2} />
              {/* 修士1年 */}
              <GradeRow gradeStr="修士1年" members={m1} />
              {/* 4年 */}
              <GradeRow gradeStr="学士4年" members={b4} />
              {/* 3年 */}
              <GradeRow gradeStr="学士3年" members={b3} />
              {/* 秘書 */}
              <VStack
                className="mx-auto my-10 w-full"
                divider={<StackDivider color="gray.200" />}
                alignItems="start"
              >
                <Text className="text-xl text-gray-500">秘書</Text>
                <HStack alignItems="flex-start">
                  <Image src={Emori.src} alt="professor orita" className="aspect-[3/4] w-[9vw]" />
                  <VStack alignItems="start">
                    <Text className="p-2">江森絵里子 / Emori Eriko</Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          </Section>
        </Box>
      </Layout>
      <SpLayout>
        <React.Fragment>
          {/* ヘッダーのパディング用要素 */}
          <div className="h-[9vh]"></div>
          <SpSection title="教員">
            <VStack>
              <HStack>
                <Image className="aspect-[3/4] w-[40vw]" src={OritaImage.src} alt="折田純久" />
                <VStack className="w-[45vw] text-center">
                  <Text className="text-sm">教授</Text>
                  <Text>折田純久</Text>
                  <Text className="text-xs text-blue-500 underline">
                    <a
                      href="https://www.cfme.chiba-u.jp/staff/detail.php?index=orita"
                      rel="noreferrer"
                      target={'_blank'}
                    >
                      プロフィール
                    </a>
                  </Text>
                  <Text className="text-xs text-blue-500 underline">
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/?term=sumihisa+orita&sort=date"
                      rel="noreferrer"
                      target={'_blank'}
                    >
                      研究内容
                    </a>
                  </Text>
                </VStack>
              </HStack>
              <HStack>
                <Image className="aspect-[3/4] w-[40vw]" src={Emori.src} alt="江森絵里子" />
                <VStack className="w-[45vw] text-center">
                  <Text className="text-sm">秘書</Text>
                  <Text>江森絵里子 / Emori Eriko</Text>
                </VStack>
              </HStack>
            </VStack>
          </SpSection>
          <SpSection title="学生">
            <VStack>
              {m1.map((member) => (
                <MemberCell key={member.id} member={member} grade="修士1年" sp={true} />
              ))}
              {b4.map((member) => (
                <MemberCell key={member.id} member={member} grade="学士4年" sp={true} />
              ))}
              {b3.map((member) => (
                <MemberCell key={member.id} member={member} grade="学士3年" sp={true} />
              ))}
            </VStack>
          </SpSection>
        </React.Fragment>
      </SpLayout>
    </>
  );
};

export default Member;
