// require('dotenv').config({path:'./env'})
import dns from "dns";
import {app} from "./app.js"

dns.setServers(["8.8.8.8"]);
import dotenv from "dotenv"//imports the dotenv package , its job is to read the .env file
import connectDB from "./db/index.js";//imports the function responsible for connecting to MongoDB
dotenv.config({
    path: './.env'
})//reads the dotenv file
console.log(process.env.MONGODB_URI)//prints the value stored in environment variable,useful for checking wether the dotenv file loaded successfully

connectDB()//calls a function that connnects to MongoDB, since it is an async function it returns a Promise
// before app.listen we have to do listen error do it is task;
.then(()=>{   
    app.listen(process.env.PORT || 8000 ,() => {
        console.log(`Server is running at port : ${process.env.PORT}`)//runs after the server starts listening
    })
})//.then() executes only if the database connection successful ,, app.listen starts the server-> if port exists in .env use it otherwise use 8000
.catch((err)=>{
    console.log("MONGO db connection failed !!!", err);
})//runs after connectDB throws an error






/*
import express from "express"
const app = express()

;( async ()=> {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error) => {
        console.log("ERR:",error);
            throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })
    }catch (error){
        console.error("ERROR:",error)
        throw err
    }
})()


*/