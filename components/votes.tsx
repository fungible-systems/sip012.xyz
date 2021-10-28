import { useAllVoteData } from '../common/store';
import { Box, BoxProps, Grid, SpaceBetween, Stack, Text } from '@nelson-ui/react';
import { Card } from './card';
import { microStxToStx } from '../common/utils';
import { SafeSuspense } from './safe-suspense';

const Caption = (props: BoxProps) => (
  <Text
    lineHeight={1}
    fontSize={'$2'}
    css={{
      '@bp2': {
        fontSize: '$3',
      },
    }}
    color={'$text-subdued'}
    textTransform={'uppercase'}
    {...props}
  />
);
const Title = (props: BoxProps) => (
  <Text
    fontSize={'$2'}
    css={{
      '@bp2': {
        fontSize: '$3',
      },
    }}
    lineHeight={1}
    textTransform={'uppercase'}
    {...props}
  />
);

const Count = (props: BoxProps) => (
  <Text
    fontSize={'$3'}
    lineHeight={1}
    css={{
      '@bp2': {
        fontSize: '$6',
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
      '@bp2': {
        size: '240px',
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
    transform="translateX(-5%)"
    css={{
      '@bp2': {
        transform: 'none',
        position: 'absolute',
        left: 0,
        pr: '64px',
        minWidth: '60%',
      },
    }}
  >
    <Stack alignItems={'center'} isInline>
      <BackgroundImage backgroundImage={'url(/yes.gif)'} />
      <Stack
        css={{
          '@bp2': {
            pl: '$base',
          },
        }}
        textAlign={'left'}
      >
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
    transform="translateX(0%) translateY(-5%)"
    css={{
      '@bp2': {
        transform: 'none',
        position: 'absolute',
        right: 0,
        top: '240px',
        pl: '64px',
        minWidth: '60%',
      },
    }}
  >
    <Stack alignItems={'center'} isInline>
      <Stack
        css={{
          '@bp2': {
            pr: '$base',
          },
        }}
        width="100%"
        textAlign={'right'}
      >
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
    <Stack
      spacing={0}
      transform="translateY(-12%)"
      textAlign={'center'}
      width={'100%'}
      position="relative"
      css={{
        '@bp2': {
          height: '480px',
        },
      }}
      maxWidth="1100px"
    >
      <YesVote />
      <NoVote />
    </Stack>
  );
};
