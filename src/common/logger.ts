import winston, { format, Logger } from "winston";

export const initializeLogger = () : Logger => {
    // Setup Winston Logger
    const logger = winston.createLogger({
        level: 'info',
        format: format.combine(
            format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
            }),
            format.errors({ stack: true }),
            format.splat(),
            format.json()
        ),
        defaultMeta: { service: 'split-api' },
        transports: [
            new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
            new winston.transports.File({ filename: 'logs/combined.log' }),
        ],
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        ),
        }));
    }
    return logger;
}