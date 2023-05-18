const CategoryRouter = require('./Category')

function route(app) {
    app.use('/category', CategoryRouter)
}

module.exports = { route }