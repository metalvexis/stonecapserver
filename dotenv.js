// Loads .env to Environment without being added to server code
let config = require('dotenv').config();

if(process.env.NODE_ENV !== 'production'){
  console.log({
    env: config.parsed
  })
}