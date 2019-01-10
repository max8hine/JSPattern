const winston = require('winston')

const { combine, timestamp, printf, colorize, splat } = winston.format

const customizedFormat = printf(info => {
	console.log(info, 'info')
	if (info.stack) {
		return `${info.timestamp} ${info.level} ${info.message} : ${info.stack}`;
	}
	return `${info.timestamp} ${info.level}: ${info.message}`;
})

const logger = winston.createLogger({
	level: process.env.LOG_LEVEL || 'debug',
	format: combine(colorize(), timestamp(), splat(), customizedFormat),
	transports: [
		new winston.transports.File({ filename: './07_libraries/winston/error.log', level: 'error' }),
		new winston.transports.File({ filename: './07_libraries/winston/combined.log' })
	]
})


module.exports = logger;
/* END */
