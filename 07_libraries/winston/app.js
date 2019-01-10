const logger = require('./logger')

try {
	logger.log('info', 'info log')
	// throw new Error('👑 New Error 1') 
} catch (e) {
	logger.log('error', e);
}