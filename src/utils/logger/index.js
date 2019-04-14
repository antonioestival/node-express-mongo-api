import winston from 'winston';
import winstonPapertrail from 'winston-papertrail';

import config from '../../config';

let logger;

if (config.env == 'test' || config.env == 'local' || config.env == 'development') {
	logger = console;
} else {
	const papertrailTransport = new winston.transports.Papertrail({
		host: config.logger.host,
		port: config.logger.port,
	});

	// logger = new winston.Logger({
	// 	transports: [papertrailTransport],
	// });

	// your centralized logger object
	logger = winston.createLogger({
		transports:[papertrailTransport],
		exitOnError: false, // do not exit on handled exceptions
	});

}

export default logger;
