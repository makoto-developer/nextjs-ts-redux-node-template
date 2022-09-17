import express from 'express';
import router from './routes/v1/index';

// 環境変数取得
require('dotenv').config()
const env = process.env

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// cors対策
const allowCrossDomain = function(req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,HEAD')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200)
  } else {
    next()
  }
}
app.use(allowCrossDomain)

app.use('/v1', router);
const port = process.env.BACKEND_PORT || env.APP_PORT || 25000;

app.listen(port);
console.log('Express listening on port:' + port);
