import {mongoose} from 'mongoose'
import { DB_NAME } from '../constants.js'

const  dbConnect = async () => {
    console.log(`${process.env.MONGODB_URI}/?appName=${DB_NAME}`)
    
    try {
        // const connection_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        const connection_instance = await mongoose.connect(`${process.env.MONGODB_URI}`,{
            serverSelectionTimeoutMS:5000
        })
        console.log(`DB Connected !! DB Host: ${connection_instance.connection.host}`)
    } catch (error) {
        console.log("MongoDb connection error ||Error connecting DB",error.message)
        console.log("full message",error)
        process.exit(1)
    }
}
export default dbConnect