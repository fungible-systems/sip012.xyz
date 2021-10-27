import { atomWithQuery, useQueryAtom } from 'jotai-query-toolkit';
import { Query } from 'jotai-query-toolkit/nextjs';
import { getVoteData } from './fetchers';

// ---
// atoms
// ---
const allVoteDataState = atomWithQuery('getVoteData', getVoteData);

// ---
// queries
// ---
export const allVoteDataQuery: Query = ['getVoteData', getVoteData];

// ---
// hooks
// ---
export const useAllVoteData = () => useQueryAtom(allVoteDataState);
