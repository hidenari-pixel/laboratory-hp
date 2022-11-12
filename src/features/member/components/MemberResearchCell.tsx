import {
  Box,
  ChakraProvider,
  Heading,
  LinkBox,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { ResearchImage } from '../../researches/components/ResearchImage';
import { useMemberResearch } from '../api/getResearch';

type MemberResearchCellProps = {
  id: string;
};

export const MemberResearchCell = ({ id }: MemberResearchCellProps) => {
  const researchQuery = useMemberResearch(id);
  const research = researchQuery.data;

  if (research === null) {
    return null;
  }

  const links = research?.links.filter((link) => link !== '');

  return (
    <LinkBox as="article" p="5" borderWidth="1px" className="my-3 h-full rounded-lg">
      <LinkBox as="article" p="10" borderWidth="1px" className="h-full rounded-md">
        {researchQuery.isLoading || !research ? (
          <Box className="w-[25vw]">
            <ChakraProvider>
              <Skeleton className="aspect-[1/1]" />
              <SkeletonText className="my-1 text-xl" />
            </ChakraProvider>
          </Box>
        ) : (
          <React.Fragment>
            <ResearchImage alt={research.title} itemName={id} />
            <Heading className="my-1 text-xl text-gray-700 decoration-1 underline-offset-4">
              {research.title}
            </Heading>
            <Text className="text-sm text-gray-500">{research.description}</Text>
            {links && links.length > 0 && <Text className="pt-3 text-sm">関連リンク</Text>}
            {links &&
              links.length > 0 &&
              links.map((link) => (
                <Text className="pt-1 text-xs underline" key={link}>
                  <a className="z-0 break-all" href={link} rel="noreferrer" target={'_blank'}>
                    {link}
                  </a>
                </Text>
              ))}
          </React.Fragment>
        )}
      </LinkBox>
    </LinkBox>
  );
};
