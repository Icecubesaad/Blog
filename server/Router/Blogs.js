const express = require("express")
const router = express.Router()
const BlogsModel = require("../Model/Blogs")
router.post("/Post",async(req,res)=>{
    const Time = new Date();
    const {title,description,tags} = req.body;
    const Saving  = await BlogsModel.create({
        Title:title,
        Description:description,
        Tags:tags,
        Date:[{
            date:Time.getDate(),
            month:Time.getMonth(),
            year:Time.getFullYear()
        }
        ]
    })
    res.send(Saving)
})
module.exports = router

