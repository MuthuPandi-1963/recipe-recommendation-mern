import mongoose from 'mongoose'
import { envLoader } from '../utils/envLoader.js'
import { pinoLogger } from '../utils/pinoLogger.js';


export const dbConfig = async ()=>{
    try {
        const res = await mongoose.connect(envLoader("MONGODB_URI"));
        pinoLogger.info(`Database connected Successfully : ${res.connection.host}`)
        
    } catch (error) {
        pinoLogger.error(error.message,"error occurred in Database Connectivity")
    }
}