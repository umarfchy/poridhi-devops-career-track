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

(function () {
  const subscriber = createClient({ url: redisUrl });
  subscriber.connect();

  // redis status logger
  subscriber.on("error", (err) => console.log("Redis error", err));
  subscriber.on("connect", () => console.log("\n Connected to Redis \n"));
  subscriber.on("reconnecting", () => {
    console.log("\nReconnecting to Redis.\n");
  });


  subscriber.on("ready", () => {
    console.log("\n Redis ready for action! \n");
    // call back fn is required
    subscriber.subscribe(redisChannel, async (message) => {
      setTimeout(()=> console.log("subscriber service:- ", message), 2000)
    });
  });
})();
