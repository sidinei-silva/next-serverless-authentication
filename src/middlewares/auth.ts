import jwt from 'jsonwebtoken';
import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';

import authConfig from '../config/auth';

interface requestCustom extends NextApiRequest {
  userId?: number;
  userEmail?: string;
}

export default (nextHandler: NextApiHandler) => async (
  req: requestCustom,
  res: NextApiResponse
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded: any = jwt.verify(token, authConfig.secret);
    req.userId = decoded.id;
    req.userEmail = decoded.email;
  } catch (err) {
    return res.status(401).json({ status: 'error', message: err.message });
  }

  return nextHandler(req, res);
};
