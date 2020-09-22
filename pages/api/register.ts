import { MongoClient, Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import url from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

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
