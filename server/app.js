import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import {pinoLogger as logger} from './utils/pinoLogger.js'
import { envLoader } from './utils/envLoader.js';

const app = express()

const port = envLoader("PORT") || 3000;

app.get("/",(req,res)=>{
    return res.json({message : "Api is running successfully : Food App"})
})

app.listen(port,(req,res)=>{
    logger.info(req,"Server running successfully");
})