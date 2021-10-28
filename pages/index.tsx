import type { NextPage } from 'next';
import { getServerSideQueryProps, withInitialQueryData } from 'jotai-query-toolkit/nextjs';
import { allVoteDataQuery } from '../common/store';
import { Box, Centered, Stack } from '@nelson-ui/react';
import { Votes } from '../components/votes';
import { About } from '../components/about';
import { HowTo } from '../components/how-to';
import Head from 'next/head';
import { VoteOnSip } from '../components/vote-on-sip';

const Title = () => (
  <Box width="100%" pt={'$extra-loose'} px={'$extra-loose'}>
    <VoteOnSip />
  </Box>
);

const ContentArea = () => (
  <Stack
    spacing={'$extra-loose'}
    justifyContent={'center'}
    alignItems={'center'}
    width="100%"
    borderRadius={'48px'}
    p={'$extra-loose'}
    css={{
      '@bp2': {
        px: '64px',
        pb: '64px',
        pt: '48px',
      },
    }}
  >
    <HowTo />
  </Stack>
);

const TopArea = () => (
  <Stack
    spacing={'$extra-loose'}
    justifyContent={'center'}
    alignItems={'center'}
    width="100%"
    background={'#F5F5F5'}
    px={'$extra-loose'}
    pb={'$extra-loose'}
    borderBottomRightRadius={'48px'}
    borderBottomLeftRadius={'48px'}
    css={{
      '@bp2': {
        px: '64px',
        pb: '48px',
        pt: '48px',
        borderRadius: '48px',
      },
    }}
  >
    <Title />
    <Votes />
    <About />
  </Stack>
);
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VOTE ON SIP-012</title>
      </Head>
      <Centered
        width="100%"
        minHeight={'100vh'}
        css={{
          '@bp2': {
            p: '64px',
          },
        }}
      >
        <Box
          width="100%"
          maxWidth="1080px"
          css={{
            '@bp2': {
              borderRadius: '48px',
            },
          }}
          background="#EBEBEB"
        >
          <TopArea />
          <ContentArea />
        </Box>
      </Centered>
    </>
  );
};

export const getServerSideProps = getServerSideQueryProps([allVoteDataQuery])();

export default withInitialQueryData(Home);
