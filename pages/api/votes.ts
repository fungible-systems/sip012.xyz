import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { getVoteData } from 'sip-12';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  try {
    res.status(200).json(await getVoteData());
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}
