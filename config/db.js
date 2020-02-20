import { pgClient } from 'config/pgClient.js';
import { sequelizeClient } from 'config/sequelizeClient.js';

export function getPgClient() { pgClient.getClient() };

export function getSequelizeClient() { sequelizeClient.getClient() };
