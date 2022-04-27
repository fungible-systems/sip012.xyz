import { API_URL } from './constants';
import { atomWithQuery, useQueryAtom } from 'jotai-query-toolkit';
import type { Query } from 'jotai-query-toolkit/nextjs';
import type { VoteData } from 'sip-12';

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
