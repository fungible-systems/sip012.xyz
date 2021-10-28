import { useAllVoteData } from '../common/store';
import { BoxProps, Grid, Stack, Text } from '@nelson-ui/react';
import { Card } from './card';
import { microStxToStx } from '../common/utils';
import { SafeSuspense } from './safe-suspense';

const Title = (props: BoxProps) => (
  <Text
    fontSize={'$4'}
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
    <Count>
      {microStxToStx(data.totals.support).toLocaleString('en-us', { maximumFractionDigits: 0 })} STX
    </Count>
  );
};
const NoVotes = () => {
  const [data] = useAllVoteData();
  return (
    <Count>
      {microStxToStx(data.totals.reject).toLocaleString('en-us', { maximumFractionDigits: 0 })} STX
    </Count>
  );
};
export const Votes = () => {
  return (
    <Grid textAlign={'center'} width={'100%'} gap={'$extra-loose'} gridTemplateColumns={'1fr 1fr'}>
      <Card>
        <Title>👌 In&nbsp;support</Title>
        <SafeSuspense fallback={<Count>...</Count>}>
          <YesVotes />
        </SafeSuspense>
      </Card>
      <Card>
        <Title>🙅 Against</Title>
        <SafeSuspense fallback={<Count>...</Count>}>
          <NoVotes />
        </SafeSuspense>
      </Card>
    </Grid>
  );
};
