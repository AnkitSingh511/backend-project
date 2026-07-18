// This file creates and configures your Express application.
//  It doesn't start the server—that happens later with app.listen().
//   Instead, it sets up middleware that processes every incoming request.


import express from "express"//Imports express framework, express is used to create web servers and APIs
import cors from "cors"//CORS (cross origin resource sharing) controls which frontend applications are allowed to send requests to your backend
import cookieParser from "cookie-parser" // variable cookieParser and Package cookie-parser

const app = express()//creates an express application
//app is the main object on which you will define routes and middlewares


// middleware is a function that executes before the request reaches your route
//app.use() registers middlewares this middlewares runs for every request
app.use(cors({
    origin: process.env.CORS_ORIGIN,//allows request only from the origin specified in .env
    credentials: true//allows cookies and authentication headers to be sent with requests
}))
app.use(express.json({limit:"16kb"}))//this middleware parses json request bodies without this middleware req.body would be undefined
//limit the maximum json body size to 16kb , if a client send more than 16kb express rejects the request,this helps the server from excessively large request bodies
app.use(express.urlencoded({extended:true,limit: "16kb"}))//controls how nested objects are passed
app.use(express.static("public"))//makes file inside the public folder directly accessible
app.use(cookieParser())//parse cookies send by the browser without this req.cookies is undefined
export  {app}//export app applicatin another file like index.js can import it



//routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users",userRouter)
// http://localhostf:8000/api/v1/users/register