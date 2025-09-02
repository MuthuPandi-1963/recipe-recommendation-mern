import pino from 'pino' 
import { envLoader } from './envLoader.js'


export const pinoLogger = pino({
    level : "info",
    transport : envLoader("NODE_ENV") !== "production" ? (
        {
            target : "pino-pretty",
            options : {
                colorize : true,
                translateTime :"SYS:standard",
            }
        }
    ) : undefined,
})