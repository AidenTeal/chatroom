import { StreamClient } from "@stream-io/node-sdk";
import dotenv from 'dotenv';

dotenv.config();

const streamAPI = process.env.STREAM_API_KEY;
const streamSecret = process.env.STREAM_SECRET;

if (!streamAPI || !streamSecret) {
    throw new Error('Stream API key and secret must be provided');
}

export const client = new StreamClient(streamAPI, streamSecret)