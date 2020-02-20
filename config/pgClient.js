import { Client } from 'pg';
import logger from 'helper/Logger.js';

let client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

let isConnected = false;

async function getClient(){
  if(!isConnected){
    try{
      await client.connect();
      let result = await client.query('SELECT NOW()');
      let now = result.rows[0].now;
      isConnected=true;
      logger.info(`Database Connected using node-postgres`);
    }catch(err){
      logger.err(err.stack)
    } 
  }
  return client;
}

export const pgClient = {
  getClient
};