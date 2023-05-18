const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { route } = require('./router/index')
const sequelize = require('./config/database')
const port = 3000

const app = express()

app.use(morgan('combined'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})