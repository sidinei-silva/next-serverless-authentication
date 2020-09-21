import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { name, email, password } = req.body;

  if (req.method !== 'POST') {
    res.statusCode = 404;
    res.json({ status: 'error', message: 'Cannot GET /api/login' });
    return;
  }

  if (!req.body) {
    res.statusCode = 400;
    res.json({ status: 'error', message: 'Body not present' });
    return;
  }

  if (!name) {
    res.statusCode = 400;
    res.json({ status: 'error', message: 'Name not present' });
    return;
  }

  if (!email) {
    res.statusCode = 400;
    res.json({ status: 'error', message: 'Email not present' });
    return;
  }

  if (!password) {
    res.statusCode = 400;
    res.json({ status: 'error', message: 'Password not present' });
    return;
  }

  res.statusCode = 200;
  res.json({ name, email, password });
};
