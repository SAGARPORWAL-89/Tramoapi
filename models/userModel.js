const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email is already exist']
    },
})

const userSchema = mongoose.model('usersagar', UserSchema)
module.exports = userSchema






// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             require: true
//         },
//         email: {
//             type: String,
//             require: true
//         },
//         image: {
//             public_id: {
//                 type: String
//             },
//             url: {
//                 type: String
//             }
//         },
//         password: {
//             type: String,
//             require: true
//         },
//         role: {
//             type: String,
//             default: 'User'
//         }
//     },
//     { timestamps: true }
// )

// const userModel = mongoose.model('user', userSchema)
// module.exports = userModel