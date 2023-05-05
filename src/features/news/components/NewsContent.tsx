import { Box, Heading, LinkBox, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

import { NewsImage } from './NewsImage';

type NewsContentProps = {
  id: string;
  date: Date;
  title: string;
  description: string;
  links?: string[];
};

export const NewsContent = ({ id, date, title, description, links }: NewsContentProps) => {
  return (
    <LinkBox
      id={title}
      as="article"
      p="5"
      borderWidth="1px"
      className="my-3 h-full cursor-pointer rounded-lg transition-all duration-500 hover:scale-[102%] hover:bg-slate-100"
    >
      <LinkBox as="article" p="10" borderWidth="1px" className="h-full rounded-md">
        <NewsImage alt={title} imageName={id} />
        <Box as="time" dateTime={date.toLocaleString()} className="text-xs text-gray-400">
          {format(date, 'yyyy/MM/dd')}
        </Box>
        <Heading className="my-1 text-xl text-gray-700 decoration-1 underline-offset-4">
          {title}
        </Heading>
        <Text className="whitespace-pre-wrap text-sm text-gray-500">{description}</Text>
        {links && links.length > 0 && <Text className="pt-3 text-sm">関連リンク</Text>}
        {links &&
          links.length > 0 &&
          links.map((link) => (
            <Text className="whitespace-pre-wrap pt-1 text-xs underline" key={link}>
              <a className="z-0 break-all" href={link} rel="noreferrer" target={'_blank'}>
                {link}
              </a>
            </Text>
          ))}
      </LinkBox>
    </LinkBox>
  );
};
