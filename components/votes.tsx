import { useAllVoteData } from '../common/store';
import { BoxProps, Grid, Stack, Text } from '@nelson-ui/react';
import { Card } from './card';
import { microStxToStx } from '../common/utils';
import { SafeSuspense } from './safe-suspense';

const Caption = (props: BoxProps) => (
  <Text lineHeight={1} fontSize={'$1'} color={'$text-subdued'} {...props} />
);
const Title = (props: BoxProps) => (
  <Text
    fontSize={'$4'}
    lineHeight={1}
    css={{
      '@bp1': {
        fontSize: '$5',
      },
    }}
    {...props}
  />
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
export const Votes = () => {
  return (
    <Grid
      textAlign={'center'}
      width={'100%'}
      gap={'$extra-loose'}
      gridTemplateColumns={'1fr'}
      css={{
        '@bp1': {
          gridTemplateColumns: '1fr 1fr',
        },
      }}
    >
      <Card>
        <Title>👌 In&nbsp;support</Title>
        <SafeSuspense fallback={<Placeholder />}>
          <YesVotes />
        </SafeSuspense>
      </Card>
      <Card>
        <Title>🙅 Against</Title>
        <SafeSuspense fallback={<Placeholder />}>
          <NoVotes />
        </SafeSuspense>
      </Card>
    </Grid>
  );
};
