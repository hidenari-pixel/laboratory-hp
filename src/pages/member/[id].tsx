import { Box, Center, HStack, SimpleGrid, StackDivider, Text, VStack } from '@chakra-ui/react';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';

import { getMembers } from '../../features/member/api/getMembers';
import { MemberImage } from '../../features/member/components/MemberImage';
import { MemberResearchCell } from '../../features/member/components/MemberResearchCell';
import { Member } from '../../features/member/types/member';
import { Layout } from '../../shared/components/Layout';
import { Section } from '../../shared/components/Section';
import { SpLayout } from '../../shared/components/sp/Layout';
import { SpSection } from '../../shared/components/sp/Section';

// 5 → m2
// 4 → m1
// 3 → b4
// 2 → b3
const extractGradeStr = (grade: number) => {
  if (grade === 0) {
    return 'ペット';
  }
  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const thisYear = thisMonth < 4 ? date.getFullYear() - 1 : date.getFullYear();
  switch (thisYear - grade) {
    case 5:
      return '修士2年';
    case 4:
      return '修士1年';
    case 3:
      return '学士4年';
    case 2:
      return '学士3年';
  }
};

const Profile: NextPage<MemberPageProps> = (props) => {
  // const router = useRouter();
  // const name = router.query.name as string;
  // const membersQuery = useMembers();
  // const profile = membersQuery.data?.find(
  //   (m) => m.name_en?.replace(/\s/g, '') === name.replace(/"/g, '').replace(/\s/g, ''),
  // );
  const profile = props.member || ({} as Member);

  // build error 対策
  if (!profile) {
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
  }

  const researches = profile?.researches.filter((research) => research !== '');

  return (
    <>
      <Layout>
        <React.Fragment>
          <Section title="紹介">
            <VStack
              className="mx-auto my-10 w-full"
              divider={<StackDivider color="gray.200" />}
              alignItems="start"
            >
              <Text className="text-xl text-gray-500">
                {profile.old ? '' : extractGradeStr(profile.year)}
              </Text>
              <HStack className="w-full" alignItems="flex-start">
                <MemberImage alt={profile.name} imageName={profile.id} className="w-[16vw]" />
                <VStack alignItems="start">
                  <Text className="p-2 text-lg">
                    {profile.name} / {profile.name_en}
                  </Text>
                  <Text className="whitespace-pre-line px-3 py-1 text-sm">
                    {profile.introduction}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Section>
          {researches.length > 0 && (
            <Section title="研究">
              <SimpleGrid columns={2} spacing={10}>
                {researches.map((id) => (
                  <MemberResearchCell key={id} id={id} />
                ))}
              </SimpleGrid>
            </Section>
          )}
        </React.Fragment>
      </Layout>
      <SpLayout>
        <>
          <div className="h-[9vh]"></div>
          <SpSection title="プロフィール">
            <Box>
              <div>
                <span className="text-sm">{profile.old ? '' : extractGradeStr(profile.year)}</span>{' '}
                <span className="text-lg">{profile.name}</span> / <span>{profile.name_en}</span>
              </div>
              <div className="my-3">
                <MemberImage alt={profile.name} imageName={profile.id} />
              </div>
              <div className="whitespace-pre-line">{profile.introduction}</div>
            </Box>
          </SpSection>
          {researches.length > 0 && (
            <SpSection title="研究">
              <SimpleGrid spacing={10}>
                {researches.map((id) => (
                  <MemberResearchCell key={id} id={id} />
                ))}
              </SimpleGrid>
            </SpSection>
          )}
        </>
      </SpLayout>
    </>
  );
};

export default Profile;

type MemberPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export async function getStaticPaths() {
  const members = await getMembers();
  const paths = members.map((member) => ({
    params: { id: member.id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string;
  const members = await getMembers();
  const member = members.find((member) => member.id === id);

  return {
    props: {
      member,
    },
  };
};
