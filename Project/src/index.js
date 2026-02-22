import dns from "node:dns/promises"
dns.setServers(["8.8.8.8","1.1.1.1"])

import dbConnect from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";

// configuring dotenv 
dotenv.config({
    path:"../.env"
})

// data base connection logic (with error handling)
dbConnect()
.then(() => { // server will run once db connection is successfull
    // starting express server
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.error("Error connecting DB",err)
})


















// ;(async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("Error: ",error)
//     }
// })()