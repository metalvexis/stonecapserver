import { pgClient } from 'db/pgClient.js'
import { sequelizeClient } from 'db/sequelizeClient.js'

export function initPgClient () { pgClient.getClient() };

export function initSequelizeClient () { sequelizeClient.getClient() };
