import { NextApiRequest, NextApiResponse } from 'next';

interface MyReq {
  req: NextApiRequest;
  res: NextApiResponse;
}

export default ({ req, res }: MyReq) => {
  if (req.method === 'POST') {
    console.log(res);
  }
};
