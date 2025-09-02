import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import {pinoLogger as logger} from './utils/pinoLogger.js'
import { envLoader } from './utils/envLoader.js';
import { AuthRoutes, OAuthRoutes } from './routes/auth.routes.js';
import { dbConfig } from './db/dbConfig.js';

const app = express()
app.use(express.json())
const port = envLoader("PORT") || 3000;

app.get("/",(req,res)=>{
    return res.json({message : "Api is running successfully : Food App"})
})
app.use(AuthRoutes);
app.use("/oauth",OAuthRoutes);

app.listen(port,async (req,res)=>{
    await dbConfig();
    logger.info(req,"Server running successfully");
})