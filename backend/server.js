const express = require('express')
const cors = require('cors')
const methodOverride = require("method-override")
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
// const path = require("path")
// const bcrypt = require("bcrypt")
const app = express()
app.use(bodyParser.json())
app.use(methodOverride("_method"))
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
const port = 8080
const api = require("./routes")
const connect = require("./models")
connect()

async function run() {
    try{
        app.listen(port, () => console.log(port + "connected"))
        app.get('/', (req,res) => {res.send("nodemon server.js on port", port, " is now running")})
        app.use('/api',api)
    } finally {
        console.log("done")
    }
}
run().catch(console.dir)