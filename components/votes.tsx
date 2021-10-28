import { useAllVoteData } from '../common/store';
import { Box, BoxProps, Grid, SpaceBetween, Stack, Text } from '@nelson-ui/react';
import { Card } from './card';
import { microStxToStx } from '../common/utils';
import { SafeSuspense } from './safe-suspense';

const Caption = (props: BoxProps) => (
  <Text lineHeight={1} fontSize={'$1'} color={'$text-subdued'} {...props} />
);
const Title = (props: BoxProps) => (
  <Text fontSize={'$1'} lineHeight={1} textTransform={'uppercase'} {...props} />
);

const Count = (props: BoxProps) => (
  <Text
    fontSize={'$3'}
    lineHeight={1}
    css={{
      '@bp1': {
        fontSize: '$5',
      },
    }}
    {...props}
  />
);

const BackgroundImage = (props: BoxProps) => (
  <Box
    borderRadius={'$medium'}
    overflow={'hidden'}
    position="relative"
    size="120px"
    flexShrink={0}
    css={{
      '@bp1': {
        size: '190px',
      },
    }}
    backgroundPosition={'center center'}
    backgroundSize={'cover'}
    {...props}
  />
);

const YesVotes = () => {
  const [data] = useAllVoteData();
  return (
    <>
      <Count>
        {microStxToStx(data.totals.support).toLocaleString('en-us', { maximumFractionDigits: 0 })}{' '}
        STX
      </Count>
      <Caption>
        {data.votes.support.length} vote
        {data.votes.support.length > 1 || data.votes.support.length === 0 ? 's' : ''}
      </Caption>
    </>
  );
};
const NoVotes = () => {
  const [data] = useAllVoteData();
  return (
    <>
      <Count>
        {microStxToStx(data.totals.reject).toLocaleString('en-us', { maximumFractionDigits: 0 })}{' '}
        STX
      </Count>
      <Caption>
        {data.votes.reject.length} vote
        {data.votes.reject.length > 1 || data.votes.reject.length === 0 ? 's' : ''}
      </Caption>
    </>
  );
};

const Placeholder = () => (
  <>
    <Count>...</Count>
    <Caption>Loading...</Caption>
  </>
);

const YesVote = () => (
  <Card
    p="$base-loose"
    background={'$background'}
    zIndex={'99'}
    width="90%"
    transform="translateX(-5%)"
    css={{
      '@bp1': {
        transform: 'none',
        position: 'absolute',
        left: 0,
        width: '72%',
      },
    }}
  >
    <Stack spacing={'$extra-loose'} alignItems={'center'} isInline>
      <BackgroundImage backgroundImage={'url(/yes.gif)'} />
      <Stack textAlign={'left'}>
        <Title>In&nbsp;support</Title>
        <SafeSuspense fallback={<Placeholder />}>
          <YesVotes />
        </SafeSuspense>
      </Stack>
    </Stack>
  </Card>
);

const NoVote = () => (
  <Card
    p="$base-loose"
    background={'#EBEBEB'}
    width="90%"
    transform="translateX(15%) translateY(-5%)"
    css={{
      '@bp1': {
        transform: 'none',
        position: 'absolute',
        right: 0,
        top: '200px',
        width: '72%',
      },
    }}
  >
    <Stack spacing={'$extra-loose'} alignItems={'center'} isInline>
      <Stack width="100%" textAlign={'right'}>
        <Title>Against</Title>
        <SafeSuspense fallback={<Placeholder />}>
          <NoVotes />
        </SafeSuspense>
      </Stack>
      <BackgroundImage backgroundImage={'url(/no.gif)'} />
    </Stack>
  </Card>
);

export const Votes = () => {
  return (
    <Box
      transform="translateY(-12%)"
      textAlign={'center'}
      width={'100%'}
      position="relative"
      css={{
        '@bp1': {
          height: '400px',
        },
      }}
    >
      <YesVote />
      <NoVote />
    </Box>
  );
};
