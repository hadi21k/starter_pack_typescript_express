import express from "express";
import defaultRouteHandler from "./routes/index.js";
import httpStatus from "http-status";
import ApiError from "./utils/ApiError.js";
import errorHandler from "./middleware/errorHandler.js";

const App = express()

App.use('/api', defaultRouteHandler);

App.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Resource not found"));
})

App.use(errorHandler);

export default App;