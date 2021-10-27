import { useAllVoteData } from '../common/store';
import { BoxProps, Grid, Stack, Text } from '@nelson-ui/react';
import { Card } from './card';

const Title = (props: BoxProps) => (
  <Text
    fontSize={'$4'}
    css={{
      '@bp1': {
        fontSize: '$6',
      },
    }}
    {...props}
  />
);

const Count = (props: BoxProps) => (
  <Text
    fontSize={'$4'}
    css={{
      '@bp1': {
        fontSize: '$6',
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
        <Count>{data.totals.support}</Count>
      </Card>
      <Card>
        <Title>🙅 Against</Title>
        <Count>{data.totals.reject}</Count>
      </Card>
    </Grid>
  );
};
