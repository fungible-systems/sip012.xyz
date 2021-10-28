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
  <Box
    pt={'$extra-loose'}
    css={{
      '@bp2': {
        pt: 0,
      },
    }}
    width="100%"
  >
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
        py: '64px',
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
        pb: '64px',
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
        <meta property="og:title" content="Vote on SIP-012" />
        <meta
          property="og:description"
          content="SIP-012 proposes an update to Clarity cost-limits via a network upgrade with the hopes of improving network capacity."
        />
        <meta property="og:image" content="https://sip012.xyz/og.png" />
      </Head>
      <Centered
        background={'#F5F5F5'}
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
          maxWidth="1100px"
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
