import { useAllVoteData } from '../common/store';
import { BoxProps, Grid, Stack, Text } from '@nelson-ui/react';
import { Card } from './card';
import { microStxToStx } from '../common/utils';

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
export const Votes = () => {
  const [data] = useAllVoteData();
  return (
    <Grid textAlign={'center'} width={'100%'} gap={'$extra-loose'} gridTemplateColumns={'1fr 1fr'}>
      <Card>
        <Title>👌 In&nbsp;support</Title>
        <Count>
          {microStxToStx(data.totals.support).toLocaleString('en-us', { maximumFractionDigits: 0 })}{' '}
          STX
        </Count>
      </Card>
      <Card>
        <Title>🙅 Against</Title>
        <Count>{microStxToStx(data.totals.reject)} STX</Count>
      </Card>
    </Grid>
  );
};
