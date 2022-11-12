/* eslint-disable @typescript-eslint/no-misused-promises */
import { HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Member } from '../types/member';
import { MemberImage } from './MemberImage';

type MemberCellProps = {
  member: Member;
  sp?: boolean;
  grade?: string;
};

export const MemberCell = ({ member, sp, grade }: MemberCellProps) => {
  const router = useRouter();

  if (sp) {
    return (
      <HStack
        onClick={() =>
          router.push(
            { pathname: '/member/[id]', query: { profile: JSON.stringify(member) } },
            'profile',
          )
        }
      >
        <MemberImage alt={member.name_en} imageName={member.id} sp={true} className="w-[40vw]" />
        <VStack className="w-[45vw] text-center">
          <Text className="text-sm">{grade}</Text>
          <Text>
            {member.name} / {member.name_en}
          </Text>
        </VStack>
      </HStack>
    );
  }

  return (
    <HStack
      onClick={() =>
        router.push(
          { pathname: '/member/[profile]', query: { profile: JSON.stringify(member) } },
          'profile',
        )
      }
      alignItems="flex-start"
      className="cursor-pointer hover:bg-gray-100"
    >
      <MemberImage className="w-[9vw]" alt={member.name_en} imageName={member.id} />
      <VStack alignItems="start">
        <Text className="p-2">
          {member.name} / {member.name_en}
        </Text>
      </VStack>
    </HStack>
  );
};
