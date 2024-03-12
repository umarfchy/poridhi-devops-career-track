"use strict";
import dotenv from "dotenv";
import { createClient } from "redis";

dotenv.config();
// redis
const redisUsername = process.env.REDIS_USERNAME || "";
const redisPassword = process.env.REDIS_PASSWORD || "";
const redisHost = process.env.REDIS_HOST || "";
const redisPort = process.env.REDIS_PORT || "";
const redisChannel = process.env.REDIS_CHANNEL || "";

// configs
const redisUrl = `redis://${redisUsername}:${redisPassword}@${redisHost}:${redisPort}`;

const redisClient = createClient({ url: redisUrl });

const setRedisCache = async (jsonData) => {
  const value = JSON.stringify({ isCached: "yes", data: jsonData });
  await redisClient.connect();
  await redisClient.set("key", value);
  return redisClient.disconnect();
};

const getRedisCache = async () => {
  await redisClient.connect();
  const cachedData = await redisClient.get("key");
  await redisClient.disconnect();
  return cachedData;
};

const deleteRedisCache = async () => {
  await redisClient.connect();
  await redisClient.del("key");
  return redisClient.disconnect();
};

const publishToRedis = async (data) => {
  await redisClient.connect();
  const subscriberCount = await redisClient.publish(redisChannel, data);
  await redisClient.disconnect();
  return subscriberCount;
};

async function main() {
  const date = new Date();
  const data = "my data" + date.toISOString();

  const val = await publishToRedis(data);
  console.log(val);

  // await deleteRedisCache()
}

main();
