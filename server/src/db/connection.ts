import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
config({ path: path.join(__dirname, '../../.env') });

let client: MongoClient;

export async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    client = new MongoClient(uri);
    await client.connect();
    console.log('Successfully connected to MongoDB.');
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export function getDB() {
  if (!client) {
    throw new Error('Database not initialized');
  }
  return client.db();
} 