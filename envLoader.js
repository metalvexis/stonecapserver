// Loads .env to Environment without being added to server code
import dotenv from 'dotenv'

const config = dotenv.config()

if (process.env.NODE_ENV !== 'production') {
  console.log(config.parsed)
}
