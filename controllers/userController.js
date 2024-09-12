const userModel = require('../models/userModel')
// const bcrypt = require("bcrypt");
// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//     cloud_name: "dllzglhax",
//     api_key: "637155761118716",
//     api_secret: "y8_ghvy66WAgI8_O_30uBUeH730",
// });

class userController {


    // get all users 
    static getAllUser = async (req, res) => {
        try {
            const getAllStudents = await userModel.find()
            // console.log(getAllStudents)
            res.send(getAllStudents)
        }
        catch (error) {
            res.send(error)
        }
    }

    //Add students 
    static student = async (req, res) => {
        try {
            const studentData = userModel(req.body)
            const createStudent = await studentData.save()
            res.status(201).send(createStudent)
        } catch (error) {
            res.status(400).send(error)
        }
    }


    // Only one student fine by ID
    static studentFind = async (req, res) => {
        try {
            const _id = req.params.id
            const studentDataFind = await userModel.findById({ _id })
            console.log(studentDataFind)
            if (!studentDataFind) {
                res.status(404).send()
            }
            else {
                res.send(studentDataFind)
            }
        } catch (error) {
            res.status(400).send(error)
        }

    }
    // Only one student find By ID and delete
    static studentDataDelete = async (req, res) => {
        try {
            const _idDelete = req.params.id
            // console.log(_idDelete)
            const studentdelete = await userModel.findByIdAndDelete(_idDelete)
            // console.log(studentdelete)
            if (!studentdelete) {
                res.status(400).send()
            }
            else {
                res.send(studentdelete)
                // console.log('ID delete ho chuki hai!')
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }


    // Student find By Id and update
    static studentUpdate = async (req, res) => {
        try {
            const _ID = req.params.id
            const studentupdate = await userModel.findByIdAndUpdate(_ID, req.body, {
                new: true
            })
            res.send(studentupdate)
        } catch (error) {
            res.send(error)
        }
    }

    // try {
    //     // console.log(req.body);
    //     const { name, email, password, confirmpassword } = req.body
    //     const image = req.files.image
    //     //  console.log(image)
    //     const imageupload = await cloudinary.uploader.upload(image.tempFilePath, {
    //         folder: 'profileimageapi'
    //     })
    //     //console.log(imageupload)

    //     const user = await UserModel.findOne({ email: email })
    //     // console.log(user)
    //     if (user) {
    //         res
    //             .status(401)
    //             .json({ status: "failed", message: "ᴛʜɪꜱ ᴇᴍᴀɪʟ ɪꜱ ᴀʟʀᴇᴀᴅʏ ᴇxɪᴛꜱ😓" });
    //     } else {
    //         if (name && email && password && confirmpassword) {
    //             if (password == confirmpassword) {
    //                 try {
    //                     const hashpassword = await bcrypt.hash(password, 10);
    //                     //console.log(hashpassword);
    //                     const result = new UserModel({
    //                         name: name,
    //                         email: email,
    //                         password: hashpassword,
    //                         image: {
    //                             public_id: imageupload.public_id,
    //                             url: imageupload.secure_url,
    //                         },
    //                     })
    //                     await result.save()
    //                     res.status(201).json({
    //                         status: "success",
    //                         message: "Registration Successfully 😃🍻",
    //                     });
    //                 } catch (error) {
    //                     console.log(error)
    //                 }
    //             } else {
    //                 res
    //                     .status(401)
    //                     .json({ status: "failed", message: "password & confirmpassword does not match" });
    //             }
    //         } else {
    //             res
    //                 .status(401)
    //                 .json({ status: "failed", message: "all field required" });
    //         }
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
}
module.exports = userController