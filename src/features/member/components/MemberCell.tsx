/* eslint-disable @typescript-eslint/no-misused-promises */
import { HStack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import { Member } from '../types/member';
import { MemberImage } from './MemberImage';

type MemberCellProps = {
  member: Member;
  sp?: boolean;
  grade?: string;
};

export const MemberCell = ({ member, sp, grade }: MemberCellProps) => {
  const hrefObj = { pathname: '/member/[id]', query: { id: member.id } };
  if (sp) {
    return (
      <Link href={hrefObj}>
        <a>
          <HStack>
            <MemberImage
              alt={member.name_en}
              imageName={member.id}
              sp={true}
              className="w-[40vw]"
            />
            <VStack className="w-[45vw] text-center">
              <Text className="text-sm">{grade}</Text>
              <Text>
                {member.name} / {member.name_en}
              </Text>
            </VStack>
          </HStack>
        </a>
      </Link>
    );
  }

  return (
    <Link href={hrefObj}>
      <a>
        <HStack alignItems="flex-start" className="cursor-pointer hover:bg-gray-100">
          <MemberImage className="w-[9vw]" alt={member.name_en} imageName={member.id} />
          <VStack alignItems="start">
            <Text className="p-2">
              {member.name} / {member.name_en}
            </Text>
          </VStack>
        </HStack>
      </a>
    </Link>
  );
};
