require('dotenv').config();
import express from 'express'
import { router } from './routes'
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './providers/mongoDB/connection';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
app.use('/v1', router);


export { app };


