import { atomWithQuery, useQueryAtom } from 'jotai-query-toolkit';
import { Query } from 'jotai-query-toolkit/nextjs';
import { VoteData } from '@fungible-systems/sip-12';
import { API_URL } from './constants';

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
