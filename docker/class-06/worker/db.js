import mysql from "mysql2/promise";
import { dbConfigs, sqlTable } from "./configs.js";

export const addNewsToDB = async (text) => {
  const query = `INSERT INTO ${sqlTable} (text) VALUES ('${text}')`;
  const connection = await mysql.createConnection(dbConfigs);
  await connection.execute(query);
  await connection.end();
};
