const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const web = require('./routes/web')
const mongoose = require('mongoose')
const connectDB = require('./db/connectDB')
const cors = require('cors')

app.use(cors()) // for api work in react 
// const fileUpload = require("express-fileupload");

// // for file upload
// app.use(fileUpload({ useTempFiles: true }));

connectDB()

app.use(express.json())
// create route 

app.use('/api', web)
// localhost:4000/api

// server created
app.listen(process.env.PORT, () => {
    console.log(`Server Running On Localhost: ${process.env.PORT} `)
})