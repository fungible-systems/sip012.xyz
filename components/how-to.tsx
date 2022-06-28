/* eslint-disable react/no-unescaped-entities */
import { Card } from "./card";
import { CardTitle, Link } from "./typography";
import { Box, Stack, Text } from "@nelson-ui/react";
import { BTC_VOTE_ADDRESSES } from "sip-12";

export const HowTo = () => {
  return (
    <Card>
      <Stack spacing={"$extra-loose"} maxWidth={"760px"}>
        <CardTitle>How to vote</CardTitle>
        <Text maxWidth="72ch">
          To vote, you&apos;ll need to send a Bitcoin transaction using either
          the key(s) you used to Stack your STX, or the key(s) to your PoX
          reward address.
        </Text>
        <Text maxWidth="72ch">
          To vote &quot;yes,&quot; send a{" "}
          <Link
            href={"https://github.com/bitcoin/bitcoin/blob/6d8543504d8c5bde1d12a3c60407dee44d2c8e11/src/policy/policy.cpp#L16-L29"}
          >
            dust amount
          </Link>{" "}
          (around 6,000 sats) of BTC to{" "}
          <Link
            href={`https://mempool.space/address/${BTC_VOTE_ADDRESSES.YES}`}
          >
            <Box as="pre" display={"inline"}>
              {BTC_VOTE_ADDRESSES.YES}
            </Box>
          </Link>
          .
        </Text>

        <Text maxWidth="72ch">
          To vote &quot;no,&quot; send a
          <Link
            href={"https://github.com/bitcoin/bitcoin/blob/6d8543504d8c5bde1d12a3c60407dee44d2c8e11/src/policy/policy.cpp#L16-L29"}
          >
            {" "}
            dust amount
          </Link>{" "}
          (around 6,000 sats) of BTC to{" "}
          <Link href={`https://mempool.space/address/${BTC_VOTE_ADDRESSES.NO}`}>
            <Box as="pre" display={"inline"}>
              {BTC_VOTE_ADDRESSES.NO}
            </Box>
          </Link>
          .
        </Text>
        <Text maxWidth="72ch">
          You can use Electrum Wallet to send Bitcoin to the above addresses.
          This assumes you have an "SP" Stacks address and have stacked
          independently. If you stacked in a pool, make sure your pool admin
          votes using the following tutorial. Here's how to do it:
        </Text>
        <Text maxWidth="72ch">
          <br />
          1. Download Electrum Wallet from{" "}
          <Link
            href={"https://github.com/bitcoin/bitcoin/blob/6d8543504d8c5bde1d12a3c60407dee44d2c8e11/src/policy/policy.cpp#L16-L29"}
          >
            here
          </Link>.
          <br />
          2. Open Electrum Wallet.
          <br />
          3. Create a new standard wallet.
          <br />
          4. Choose "I already have a seed"
          <br />
          5. Enter your Stacks wallet seed. and change the seed type in options
          to BIP39
          <br />
          6. Click "Next" and change your wallet type to "legacy" and override
          the derivation path to (m/44'/5757'/0'), without the brackets.
          <br />
          7. Enter a password and click "Next".
          <br />
          8. Go to the Receive tab and click "New Address".
          <br />
          9. Send ~6,000 sats of Bitcoin to the address you just created.
          <br />
          10. Once you have some Bitcoin on your address, go to the send tab and
          send 5000 sats to one of the addresses above.
        </Text>
        <Text maxWidth="72ch">
          The vote-tallying software will take it from there. Happy voting and
          thank you for your participation on the network!
        </Text>
      </Stack>
    </Card>
  );
};
