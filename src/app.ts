require('dotenv').config();
import express from 'express'
import { router } from './routes'
import cors from 'cors';
// import swagguerUi from 'swagger-ui-express';
// import swaggerDocs from './swagger.json';
import bodyParser from 'body-parser';
import connectDB from './providers/mongoDB/connection';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
//app.use('/docs', swagguerUi.serve as any, swagguerUi.setup(swaggerDocs) as any);
app.use('/v1', router);

export { app };


