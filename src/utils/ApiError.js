//this code creates a custom error class called API error.it is used to send structured API error responses instead of plain javaScript errors
//So an Api Error is still an error but with extra information such as statuscode,success and errors
class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
        //The constructor   runs whenever you create an error
    ){
        super(message)//calls the parent Error constructor, This is what makes the api error behave like normal javascript error, without super(message) the error would not have a proper message
        //the below lines add extra field to the error object
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
        
  // the stack trace shows how the error was created
        if (stack){
            this.stack = stack
        } 
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}
//why we create custom error class ? instead of throwing plain errors you can throw : now your error already contains the http status code and consistent API format 