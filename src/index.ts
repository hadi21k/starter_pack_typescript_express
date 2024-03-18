import App from "./app.js";
import config from "./config/config.js";
import logger from "./config/logger.js";

App.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
})