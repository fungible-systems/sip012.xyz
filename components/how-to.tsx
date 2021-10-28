import { Card } from './card';
import { CardTitle, Link } from './typography';
import { Box, Text } from '@nelson-ui/react';

export const HowTo = () => {
  return (
    <Card>
      <CardTitle>How to vote</CardTitle>
      <Text>
        To vote, you&apos;ll need to send a Bitcoin transaction using either the key(s) you used to
        Stack your STX, or the key(s) to your PoX reward address.
      </Text>
      <Text>
        To vote &quot;yes,&quot; send a{' '}
        <Link
          href={
            'https://github.com/bitcoin/bitcoin/blob/6d8543504d8c5bde1d12a3c60407dee44d2c8e11/src/policy/policy.cpp#L16-L29'
          }
        >
          dust amount
        </Link>{' '}
        of BTC to{' '}
        <Link href="https://mempool.space/address/111111111111111111112czxoHN">
          <Box as="pre" display={'inline'}>
            111111111111111111112czxoHN
          </Box>
        </Link>
        .
      </Text>

      <Text>
        To vote &quot;no,&quot; send a
        <Link
          href={
            'https://github.com/bitcoin/bitcoin/blob/6d8543504d8c5bde1d12a3c60407dee44d2c8e11/src/policy/policy.cpp#L16-L29'
          }
        >
          {' '}
          dust amount
        </Link>{' '}
        of BTC to{' '}
        <Link href="https://mempool.space/address/111111111111111111112kmzDG2">
          <Box as="pre" display={'inline'}>
            111111111111111111112kmzDG2
          </Box>
        </Link>
        .
      </Text>
      <Text>
        The vote-tallying software will take it from there. Happy voting and thank you for your
        participation on the network!
      </Text>
    </Card>
  );
};
