import { connectMongoose } from './mongoose';
import clientPromise from './mongoConnect';
import type { Db } from 'mongodb';

export async function connectToDatabase(): Promise<Db> {
  await connectMongoose();
  const client = await clientPromise;
  return client.db();
}
