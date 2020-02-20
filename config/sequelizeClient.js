import Sequelize from 'sequelize';
import logger from 'helper/Logger.js';

let isConnected = false;

let client = new Sequelize(
  process.env.PGDATABASE, 
  process.env.PGUSER, 
  process.env.PGPASSWORD, 
  {
    host: process.env.PGHOST,
    dialect: 'postgres'
  }
);

async function getClient() {
  if(!isConnected){
    try{
      await client.authenticate();
      isConnected = true;
      logger.info(`Database Connected using Sequelize`);
    } catch(err){
      logger.err(err.stack)
    }
  }

  return client;
  
}

export const sequelizeClient = {
  getClient
}