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
  <Box width="100%" maxWidth={'1264px'} pt={'$extra-loose'} px={'$extra-loose'}>
    <VoteOnSip />
  </Box>
);

const ContentArea = () => (
  <Stack
    maxWidth={'820px'}
    spacing={'$extra-loose'}
    justifyContent={'center'}
    alignItems={'center'}
    width="100%"
    borderRadius={'48px'}
    p={'$extra-loose'}
    css={{
      '@bp1': {
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
    maxWidth={'820px'}
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
      '@bp1': {
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
        minHeight={'100vh'}
        css={{
          '@bp1': {
            p: '64px',
          },
        }}
      >
        <Box
          css={{
            '@bp1': {
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
