import { VoteData, VoteTransaction } from './types';

export async function getVoteData(): Promise<VoteData> {
  const res = await fetch('https://sip12.halo.ms/votedata');
  const json = await res.json();
  return {
    votes: {
      support: json.votes.support || null,
      reject: json.votes.reject || null,
    },
    totals: {
      support: BigInt(json.totals.support).toString(10),
      reject: BigInt(json.totals.reject).toString(10),
    },
  };
}

export async function getBTCVoteTransactions(approve = false): Promise<VoteTransaction[] | null> {
  let url: string;
  if (approve) {
    url = 'https://sip12.halo.ms/btcApprove';
  } else {
    url = 'https://sip12.halo.ms/btcNoApprove';
  }
  const res = await fetch(url);
  return (await res.json()) || null;
}
