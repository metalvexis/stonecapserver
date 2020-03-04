import { PgClient } from 'db/PgClient.js'
import { SequelizeClient } from 'db/SequelizeClient.js'

export { default as DbModels } from 'db/SequelizeClient.js'

export function initPgClient () { PgClient.getClient() };

export function initSequelizeClient () { SequelizeClient.getClient() };
