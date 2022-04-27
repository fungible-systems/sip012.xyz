import { useAllVoteData } from '../common/store';
import { Box, Grid, SpaceBetween, Stack, Text } from '@nelson-ui/react';
import { CardTitle } from './typography';
import { microStxToStx } from '../common/utils';

export const Analysis = () => {
  const [data] = useAllVoteData();
  return (
    <Stack mt="$extra-loose" maxWidth={'960px'} spacing="$extra-loose" width="100%">
      <Text fontSize={'$4'} id="analysis">
        Data Analysis
      </Text>
      <CardTitle id="analysis">In Support</CardTitle>
      <Stack spacing={0}>
        {data.votes.support
          .sort((a, b) => (a.amount > b.amount ? -1 : 1))
          .map(vote => (
            <SpaceBetween
              alignItems="flex-end"
              py="$extra-loose"
              borderBottom={'1px solid $border'}
              width="100%"
              key={vote.btcAddress}
            >
              <Stack>
                <Box>{vote.btcAddress}</Box>
                <Box>{vote.stxAddress}</Box>
              </Stack>
              <Box textAlign="right">
                {microStxToStx(vote.amount as string).toLocaleString('en-us', {
                  maximumFractionDigits: 6,
                  minimumFractionDigits: 6,
                })}{' '}
                STX
              </Box>
            </SpaceBetween>
          ))}
      </Stack>
    </Stack>
  );
};
