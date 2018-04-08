const crypto = require('crypto')

const md5 = crypto.createHash('md5')

const message = 'hello world'

const digest = md5.update(message).digest('hex')

digest
