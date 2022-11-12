import { Box, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';

import { useNews } from '../features/news/api/getNews';
import { NewsContent } from '../features/news/components/NewsContent';
import { Layout } from '../shared/components/Layout';
import { PageLoading } from '../shared/components/PageLoading';
import { Pagination } from '../shared/components/Pagination';
import { Section } from '../shared/components/Section';
import { SpLayout } from '../shared/components/sp/Layout';
import { SpSection } from '../shared/components/sp/Section';

import type { NextPage } from 'next';

const ItemLimitation = 4;

const News: NextPage = () => {
  const newsQuery = useNews();
  const news = newsQuery.data || [];
  const [itemOffset, setItemOffset] = useState<number>(0);
  const endOffset = itemOffset + ItemLimitation;
  const currentNews = news.slice(itemOffset, endOffset);
  const pageCount = news.length / ItemLimitation;

  if (newsQuery.isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      <Layout>
        <Section title="NEWS">
          <React.Fragment>
            <SimpleGrid columns={2} spacing={10}>
              {currentNews.map((item) => (
                <Box key={item.id}>
                  <NewsContent
                    id={item.id}
                    date={new Date(item.date.seconds * 1000)}
                    title={item.title}
                    description={item.description}
                    links={item.links}
                  />
                </Box>
              ))}
            </SimpleGrid>
            <Pagination
              pageCount={pageCount}
              itemsPerPage={ItemLimitation}
              itemCount={news.length}
              setItemOffset={setItemOffset}
            />
          </React.Fragment>
        </Section>
      </Layout>
      <SpLayout>
        <React.Fragment>
          <div className="h-[9vh]"></div>
          <SpSection title="NEWS">
            <React.Fragment>
              {currentNews.map((item) => (
                <Box key={item.title} className="w-[85vw]">
                  <NewsContent
                    id={item.id}
                    date={new Date(item.date.seconds * 1000)}
                    title={item.title}
                    description={item.description}
                    links={item.links}
                  />
                </Box>
              ))}
              <Pagination
                pageCount={pageCount}
                itemsPerPage={ItemLimitation}
                itemCount={news.length}
                setItemOffset={setItemOffset}
              />
            </React.Fragment>
          </SpSection>
        </React.Fragment>
      </SpLayout>
    </>
  );
};

export default News;
