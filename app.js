const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

// initialize app
const app = vertex.app()

// import routes
const index = require('./routes/index')
const api = require('./routes/api')
const auth = require('./routes/auth')
const email = require('./routes/email')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes
app.use('/auth', auth)
app.use('/email', email)


module.exports = app