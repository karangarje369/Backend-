import express from "express"
import cors from "cors"
import cookieParser from "cookieParser"

const app = express()

//handling cors 
app.use( cors({
    origin:process.env.CORS_ORIGIN,
}
))

//Limits json incomming data
app.use( express.json({
    limit:"16kb"
}))

//handling url data
app.use(express.urlencoded(
    {
        extended:true,
        limit:"16kb"
    }
))

//files can access by anyone  --> public assets  
app.use(express.static("public"))

// accesing users cookies 
app.use(cookieParser())

export {app}

