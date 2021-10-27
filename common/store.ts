import { atomWithQuery, useQueryAtom } from 'jotai-query-toolkit';
import { Query } from 'jotai-query-toolkit/nextjs';
import { VoteData } from '@fungible-systems/sip-12';

const VERCEL_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
const API_URL = VERCEL_URL || 'http://localhost:3000';

async function fetchFromApi(): Promise<VoteData> {
  const res = await fetch(`${API_URL}/api/votes`);
  return (await res.json()) as VoteData;
}

// ---
// atoms
// ---
const allVoteDataState = atomWithQuery('getVoteData', fetchFromApi);

// ---
// queries
// ---
export const allVoteDataQuery: Query = ['getVoteData', fetchFromApi];

// ---
// hooks
// ---
export const useAllVoteData = () => useQueryAtom(allVoteDataState);
