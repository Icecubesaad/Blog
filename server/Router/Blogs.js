const express = require("express")
const router = express.Router()
const BlogsModel = require("../Model/Blogs")
const middleware = require("../Middleware/Middleware")
const { v4: uuidv4 } = require('uuid');
router.post("/Post",middleware,async(req,res)=>{
    const Time = new Date();
    const {title,description,tags,user} = req.body;
    const Saving  = await BlogsModel.create({
        Title:title,
        Description:description,
        Tags:tags,
        Date:[{
            date:Time.getDate(),
            month:Time.getMonth(),
            year:Time.getFullYear()
        }
        ],
        User:user,
        Id:uuidv4()
    })
    res.send(Saving)
})
router.get("/get",async(req,res)=>{
    const blogs =await BlogsModel.find()
    res.send(blogs)
})
router.get("/filter/:id",async(req,res)=>{
    const id = req.params.id;
    const data = await BlogsModel.findOne({Id:id})
    res.send(data)
})
module.exports = router

