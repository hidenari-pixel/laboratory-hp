import { Box, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';

import { useResearches } from '../features/researches/api/getResearches';
import { ResearchCell } from '../features/researches/components/ResearchCell';
import { Layout } from '../shared/components/Layout';
import { PageLoading } from '../shared/components/PageLoading';
import { Pagination } from '../shared/components/Pagination';
import { Section } from '../shared/components/Section';
import { SpLayout } from '../shared/components/sp/Layout';
import { SpSection } from '../shared/components/sp/Section';

import type { NextPage } from 'next';

const ItemLimitation = 4;

const Research: NextPage = () => {
  const researchesQuery = useResearches();
  const researches = researchesQuery.data || [];
  const [itemOffset, setItemOffset] = useState<number>(0);
  const endOffset = itemOffset + ItemLimitation;
  const currentResearches = researches.slice(itemOffset, endOffset);
  const pageCount = researches.length / ItemLimitation;

  if (researchesQuery.isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      <Layout>
        <Section title="研究内容">
          <React.Fragment>
            <SimpleGrid columns={2} spacing={10}>
              {currentResearches.map((research) => (
                <Box key={research.title}>
                  <ResearchCell
                    id={research.id}
                    title={research.title}
                    description={research.description}
                    links={research.links.filter((link) => link !== '')}
                  />
                </Box>
              ))}
            </SimpleGrid>
            <Pagination
              pageCount={pageCount}
              itemsPerPage={ItemLimitation}
              itemCount={researches.length}
              setItemOffset={setItemOffset}
            />
          </React.Fragment>
        </Section>
      </Layout>
      <SpLayout>
        <React.Fragment>
          <div className="h-[9vh]"></div>
          <SpSection title="研究内容">
            <React.Fragment>
              {currentResearches.map((research) => (
                <ResearchCell
                  key={research.title}
                  id={research.id}
                  title={research.title}
                  description={research.description}
                  links={research.links.filter((link) => link !== '')}
                />
              ))}
              <Pagination
                pageCount={pageCount}
                itemsPerPage={ItemLimitation}
                itemCount={researches.length}
                setItemOffset={setItemOffset}
              />
            </React.Fragment>
          </SpSection>
        </React.Fragment>
      </SpLayout>
    </>
  );
};

export default Research;
