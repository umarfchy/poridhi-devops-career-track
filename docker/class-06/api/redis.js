"use strict";
import { redisConfigs, redisChannel } from "./configs.js";
import { createClient } from "redis";

// create redis client
const redisClient = createClient(redisConfigs);

export const addNewsToCache = async (news) => {
  await redisClient.connect();
  await redisClient.set("news", JSON.stringify(news));
  await redisClient.disconnect();
};

export const getNewsFromCache = async () => {
  await redisClient.connect();
  const cachedNewsString = await redisClient.get("news");
  await redisClient.disconnect();
  return JSON.parse(cachedNewsString);
};

export const deleteNewsFromCache = async () => {
  await redisClient.connect();
  await redisClient.del("news");
  await redisClient.disconnect();
};

export const publishNews = async (news) => {
  await redisClient.connect();
  await redisClient.publish(redisChannel, news);
  await redisClient.disconnect();
}