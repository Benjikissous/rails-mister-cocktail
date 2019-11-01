<<<<<<< HEAD
=======
process.env.NODE_ENV = process.env.NODE_ENV || 'production'

>>>>>>> f11d6087cf3b2fd865875218db25dacd6e60115a
const environment = require('./environment')

module.exports = environment.toWebpackConfig()
