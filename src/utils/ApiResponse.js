// This class is opposite to API error , Api error use when the request fails this is used when the request succeeds
//this class is use to create a standard success response for your API
class ApiResponse {
    constructor(statusCode, data, message = "Success"){//constructor runs whenever we create an object of this this class
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
export {ApiResponse}