import mongoose from "mongoose"//import mongoose library, it is an ODM that helps node.js applications to interact with mongoDB
//it provides mongoose.connect, mongoose.model,mongoose.Schema
import { DB_NAME } from "../constants.js";//imports the constants DB_name from constants.js


const connectDB = async () => {
    try{
     const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
    
}//difines asynchronous arrow function named connectDB, Since connecting to a database take time the function is marked async, That allow the use of await
//any code the may throw an error is placed inside try 
//if an error occur execution jumps to catch block
//mongoose.connect returns a Promise 
//await pauses the connection until the connection fails or the connnection succeds
//When the connection succeds,Mongoose returns a mongoose instance containing information about the connection

export default connectDB