export const envLoader = (key = "")=>{
    if(!key){
        
    }
    const val = process.env[key.toUpperCase()];
    if(!val){
        throw Error("Environment  Variable its not .env FIle : ",key ,": missing");
    }
    return val
}