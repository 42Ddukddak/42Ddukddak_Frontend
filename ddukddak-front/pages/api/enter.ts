import { NextApiRequest, NextApiResponse } from 'next';

interface myReq {
  req: NextApiRequest;
  res: NextApiResponse;
}

export default ({ req, res }: myReq) => {
  if (req.method === 'POST') {
    console.log(res);
  }
};
