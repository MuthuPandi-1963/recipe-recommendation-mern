import dotenv from "dotenv";
export const envLoader = (key = "")=>{
    if(!key){
        
    }
    const val = process.env[key.toUpperCase()];
    if(!val){
        throw new Error(`Environment Variable missing in .env file: ${key}`);

    }
    return val
}
dotenv.config();
