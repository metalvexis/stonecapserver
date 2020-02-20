import { getPgClient, getSequelizeClient } from 'config/db.js';
import expressApp from 'config/express.js';

async function initApp(){
  await getSequelizeClient();
  expressApp.start();
}

initApp();