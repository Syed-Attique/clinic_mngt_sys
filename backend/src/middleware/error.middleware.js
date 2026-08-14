import { AppError } from "../errors/AppError.js";

const errorHandler = (err, req, res, next) => {
    
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            "message": err.message
        });
    }
    
    else {
        res.status(500).json({
            "message": "Internal Server Error"
        });
    };

};

export default errorHandler;