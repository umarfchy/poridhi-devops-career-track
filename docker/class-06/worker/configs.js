"use strict";

// configs
export const PORT = process.env.PORT || 5001;

// db configs
const sqlHost = process.env.MYSQL_HOST || "localhost";
const sqlUser = process.env.MYSQL_USERNAME || "root";
const sqlPassword = process.env.MYSQL_PASSWORD || "mypassword";
const sqlDatabase = process.env.MYSQL_DATABASE || "mydb";
export const sqlTable = process.env.MYSQL_TABLE || "mytable";

export const dbConfigs = {
  host: sqlHost,
  user: sqlUser,
  password: sqlPassword,
  database: sqlDatabase,
};

// redis configs
const redisUsername = process.env.REDIS_USERNAME || "";
const redisPassword = process.env.REDIS_PASSWORD || "mypassword";
const redisHost = process.env.REDIS_HOST || "localhost";
const redisPort = process.env.REDIS_PORT || "6379";
export const redisChannel = process.env.REDIS_CHANNEL || "channel1";

const redisUrl = `redis://${redisUsername}:${redisPassword}@${redisHost}:${redisPort}`;
export const redisConfigs = { url: redisUrl };
