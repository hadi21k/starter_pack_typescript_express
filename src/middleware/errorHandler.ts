import { ErrorRequestHandler } from 'express';
import logger from '../config/logger.js';
import ApiError from '../utils/ApiError.js';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let stack;

    if (process.env.NODE_ENV === 'production') {
        stack = undefined;
    } else {
        stack = err.stack
    }

    logger.error({
        message: err.message,
        stack,
        url: req.originalUrl,
        method: req.method,
    });

    let response;
    if (err instanceof ApiError) {
        response = {
            message: err.message,
            code: err.statusCode
        }
    } else {
        response = {
            message: "Internal server error"
        }
    }

    res.status(err.statusCode || 500).json(response);
}

export default errorHandler;