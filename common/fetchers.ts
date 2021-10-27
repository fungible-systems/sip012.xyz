import { VoteData, VoteTransaction } from './types';

export async function getVoteData(): Promise<VoteData> {
  const res = await fetch('https://sip12.halo.ms/votedata');
  const json = await res.json();
  return {
    votes: {
      support: json.votes.support,
      reject: json.votes.reject,
    },
    totals: {
      support: BigInt(json.totals.support).toString(10),
      reject: BigInt(json.totals.reject).toString(10),
    },
  };
}

export async function getBTCVoteTransactions(approve = false): Promise<VoteTransaction[] | null> {
  const res = await fetch(
    approve ? 'https://sip12.halo.ms/btcApprove' : 'https://sip12.halo.ms/btcNoApprove'
  );
  return (await res.json()) || null;
}
