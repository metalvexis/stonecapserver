import express from 'express';
import bodyParser from 'body-parser';
import { ErrorHandler } from 'middleware/ErrorHandler.js';
import logger from 'helper/Logger.js';

function start(){
  const app = express();
  const port = process.env.PORT;

  app.use( [
    bodyParser.json({type: '*/json'}),
    bodyParser.urlencoded({extended: true})
  ] );

  app.use('/health', (req, res, next)=>{
    res.sendStatus(200);
  });

  app.use(ErrorHandler); // Errors sink

  app.listen(port, ()=> logger.info(`App listening on port ${port}`));

  return app;
}

export default {
  start
}