import { Card } from './card';
import { CardTitle, Link } from './typography';
import { Text } from '@nelson-ui/react';

export const About = () => {
  return (
    <Card>
      <CardTitle>About SIP-012</CardTitle>
      <Text maxWidth="72ch">
        The current Clarity cost limits were set very conservatively in Stacks 2.0: blocks with
        contract-calls frequently meet one or more of these limits, which negatively affects
        transaction throughput. This SIP proposes an update to these cost-limits via a network
        upgrade and further, that the network upgrade be executed at a block height chosen by an
        off-chain process described in this SIP.
      </Text>
      <Link
        href={
          'https://github.com/hirosystems/sips/blob/draft/sip-012/sips/sip-012/sip-012-cost-limits-network-upgrade.md'
        }
      >
        Read the SIP →
      </Link>
    </Card>
  );
};
