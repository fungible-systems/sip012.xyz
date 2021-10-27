import { atomWithQuery, useQueryAtom } from 'jotai-query-toolkit';
import { Query } from 'jotai-query-toolkit/nextjs';
import { getVoteData, getBTCVoteTransactions } from './fetchers';

// ---
// atoms
// ---
const btcVoteYesTransactionsState = atomWithQuery([getBTCVoteTransactions.name, 'yes'], () =>
  getBTCVoteTransactions(true)
);
const btcVoteNoTransactionsState = atomWithQuery([getBTCVoteTransactions.name, 'no'], () =>
  getBTCVoteTransactions(false)
);
const allVoteDataState = atomWithQuery('getVoteData', () => getVoteData());

// ---
// queries
// ---
export const btcVoteYesTransactionsQuery: Query = [
  [getBTCVoteTransactions.name, 'yes'],
  () => getBTCVoteTransactions(true),
];
export const btcVoteNoTransactionsQuery: Query = [
  [getBTCVoteTransactions.name, 'no'],
  () => getBTCVoteTransactions(false),
];
export const allVoteDataQuery: Query = ['getVoteData', getVoteData];

// ---
// hooks
// ---
export const useBtcVoteYesTransactions = () => useQueryAtom(btcVoteYesTransactionsState);
export const useBtcVoteNoTransactions = () => useQueryAtom(btcVoteNoTransactionsState);
export const useAllVoteData = () => useQueryAtom(allVoteDataState);
