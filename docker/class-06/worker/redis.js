"use strict";
import { redisConfigs } from "./configs.js";
import { createClient } from "redis";

// create redis client
export const redisClient = createClient(redisConfigs);

export const deleteNewsFromCache = async () => {
  await redisClient.connect();
  await redisClient.del("news");
  await redisClient.disconnect();
};
