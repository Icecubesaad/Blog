const express = require("express")
const router = express.Router()
const BlogsModel = require("../Model/Blogs")
router.post("/Post",async(req,res)=>{
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
        User:user
    })
    res.send(Saving)
})
router.get("/get",async(req,res)=>{
    const blogs =await BlogsModel.find()
    res.send(blogs)
})
module.exports = router

