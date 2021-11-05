import type { NextPage } from 'next';
import { getServerSideQueryProps, withInitialQueryData } from 'jotai-query-toolkit/nextjs';
import { allVoteDataQuery, useAllVoteData } from '../common/store';
import { Box, Centered, SpaceBetween, Stack } from '@nelson-ui/react';
import { Votes } from '../components/votes';
import { About } from '../components/about';
import { HowTo } from '../components/how-to';
import Head from 'next/head';
import { VoteOnSip } from '../components/vote-on-sip';
import { DarkModeToggle } from '../components/dark-mode-toggle';
import { CardTitle } from '../components/typography';
import { microStxToStx } from '../common/utils';
import { Analysis } from '../components/analysis';

const Title = () => (
  <Box
    maxWidth="1100px"
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

const TopArea = () => (
  <Stack
    spacing={'$extra-loose'}
    justifyContent={'center'}
    alignItems={'center'}
    width="100%"
    background={'$surface-subdued'}
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
    <Analysis />
  </Stack>
);
const Home: NextPage = () => {
  return (
    <>
      <Box position="absolute" right={'$base'} top={'$base'}>
        <DarkModeToggle />
      </Box>
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
        background={'$surface-subdued'}
        width="100%"
        minHeight={'100vh'}
        color={'$text'}
        pt={'$loose'}
        css={{
          '@bp2': {
            pt: '64px',
          },
        }}
      >
        <Box
          width="100%"
          css={{
            '@bp2': {
              borderTopRightRadius: '48px',
              borderTopLeftRadius: '48px',
            },
          }}
          background={'$border--disabled'}
        >
          <TopArea />
        </Box>
      </Centered>
    </>
  );
};

export const getServerSideProps = getServerSideQueryProps([allVoteDataQuery])();

export default withInitialQueryData(Home);
