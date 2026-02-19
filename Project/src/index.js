import dns from "node:dns/promises"
dns.setServers(["8.8.8.8","1.1.1.1"])
import dbConnect from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";
dotenv.config({
    path:"../.env"
})
dbConnect()
.then(() => {
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