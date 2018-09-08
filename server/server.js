import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', require('./routes/api'));
app.use(morgan('combined'));

/*
let options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
*/

mongoose.connect('mongodb://randomguy:randomguy123@ds149672.mlab.com:49672/get-in-touch-records', options)
  .catch((err) => {
    console.error('eror: ' + err.stack)
    process.exit(1)
  });
mongoose.connection.on('open', () => {
  console.log('connected to database')
});
mongoose.Promise = global.Promise

app.listen(process.env.port || 4000, () => {
  console.log('Server is up in port 4000.......!')
});

 




























