import winston from "winston";
const { combine, simple, timestamp, printf, colorize, align } = winston.format;


const logger = winston.createLogger({
    levels: winston.config.syslog.levels,
    level: "info",
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        simple(),
        printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: []
})

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.Console({
            format: winston.format.combine(
                colorize({ all: true }),
                align(),
                printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
            ),
        })
    )
}

if (process.env.NODE_ENV === "production") {
    logger.add(new winston.transports.File({ filename: "./src/logs/error.log", level: "error" }));
    logger.add(new winston.transports.File({ filename: "./src/logs/combined.log" }));
}

export default logger;
