import { NextApiRequest, NextApiResponse } from 'next';
import { getVoteData } from '@fungible-systems/sip-12';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json(await getVoteData());
}
