"use strict";
import dotenv from "dotenv";
import { createClient } from "redis";
import mysql from "mysql2/promise";

dotenv.config();

// redis
const redisUsername = process.env.REDIS_USERNAME || "";
const redisPassword = process.env.REDIS_PASSWORD || "";
const redisHost = process.env.REDIS_HOST || "";
const redisPort = process.env.REDIS_PORT || "";
const redisChannel = process.env.REDIS_CHANNEL || "";

// mysql
const sqlHost = process.env.MYSQL_HOST || "";
const sqlUser = process.env.MYSQL_USERNAME || "";
const sqlPassword = process.env.MYSQL_PASSWORD || "";
const sqlDatabase = process.env.MYSQL_DATABASE || "";
const sqlTable = process.env.MYSQL_TABLE || "";

// configs
const redisUrl = `redis://${redisUsername}:${redisPassword}@${redisHost}:${redisPort}`;
const dbConfig = {
  host: sqlHost,
  user: sqlUser,
  password: sqlPassword,
  database: sqlDatabase,
};

// helper fn for DB
const createData = async (data) => {
  const sqlQuery = `INSERT INTO ${sqlTable} (data) VALUES ('${data}')`;
  const sqlConnection = await mysql.createConnection(dbConfig);
  return sqlConnection.execute(sqlQuery);
};

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
      console.log("subscriber service:- ", message);
      try {
        await createData(message);
      } catch (error) {
        console.log({ error });
      }
    });
  });
})();
