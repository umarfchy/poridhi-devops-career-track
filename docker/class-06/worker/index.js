"use strict";
import { addNewsToDB } from "./db.js";
import { redisChannel } from "./configs.js";
import { getNewsAnalysis } from "./helper.js";
import { deleteNewsFromCache, redisClient } from "./redis.js";

const expensiveWorker = async (newsText) => {
  try {
    const newsTextAnalysis = getNewsAnalysis(newsText);
    await addNewsToDB(newsTextAnalysis);
    await deleteNewsFromCache();
  } catch (error) {
    console.log({ error });
  }
};

const main = async () => {
  const subscriber = redisClient.duplicate();
  subscriber.connect();

  subscriber.on("error", (err) => {
    console.log("\n error connecting redis \n", err);
  });

  subscriber.on("connect", () => {
    console.log("\n connected to redis \n");
  });

  subscriber.on("ready", () => {
    console.log("\n subscriber is ready \n");
    // call back fn is required
    subscriber.subscribe(redisChannel, async (message) => {
      console.log(`\n message from worker service:-  ${message} \n`);

      await expensiveWorker(message);
    });
  });
};

main();
