//This code is meant to create a higher order function that automatically catches errors from asynchronous route handlers and passes the to express error handling middleware
const asyncHandler = (requestHandler) => {// the function takes another function as argument,, the argument requesthandler is usually an express route handler
    return (req, res, next) => {// calling the requesthandler(req,res,next) returns a promise because it is an async function
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));//Promise.resolve ensures that even if the handler is not async it is treated like a promise
    };//.catch -> if the requestHandler throws an error or the Promise is rejected
    //next(err) passes the error to the express error handling middleware without this wrapper you would have to write try catch inside every async route
};
export {asyncHandler}




// const asyncHandler = ()=> {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next) 
//     }
//     catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }