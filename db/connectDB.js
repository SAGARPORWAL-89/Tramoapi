const mongoose = require('mongoose')

const connectDB = () => {

    return mongoose.connect(process.env.LIVE_URL)
        .then(() => {
            console.log("Database Connection Successfully")
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = connectDB