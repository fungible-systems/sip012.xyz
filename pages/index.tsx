import type { NextPage } from 'next';
import { getServerSideQueryProps, withInitialQueryData } from 'jotai-query-toolkit/nextjs';
import { allVoteDataQuery } from '../common/store';
import { Centered, Stack, Text } from '@nelson-ui/react';
import { Votes } from '../components/votes';
import { About } from '../components/about';
import { HowTo } from '../components/how-to';
import Head from 'next/head';

const Title = () => (
  <Text fontSize={'$8'} textTransform={'uppercase'}>
    Sip-012
  </Text>
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SIP-012 Voting</title>
      </Head>
      <Centered minHeight={'100vh'}>
        <Stack
          maxWidth={'820px'}
          spacing={'$extra-loose'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'$extra-loose'}
          width="100%"
        >
          <Title />
          <Votes />
          <About />
          <HowTo />
        </Stack>
      </Centered>
    </>
  );
};

export const getServerSideProps = getServerSideQueryProps([allVoteDataQuery])();

export default withInitialQueryData(Home);
