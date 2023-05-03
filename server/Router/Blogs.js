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
        Likes:0,
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
router.get("/Relate/:id",async(req,res)=>{
    const id = req.params.id;
    const data = await BlogsModel.findOne({Id:id})
    const query = { Tags: { $in: data.Tags } };
const RelatableData =await BlogsModel.find(query);
    res.send(RelatableData)
})
router.post("/updates/:id",async(req,res)=>{
    const {changelike} = req.body;
    console.log(changelike)
    if(changelike){
        const id = req.params.id;
        const update = { $inc: { Likes: 1 } };
        const filter = {Id:id}
        const options = {new:true}
        const data =await BlogsModel.findOneAndUpdate(filter,update,options)
    }
    if(!changelike){
        const id = req.params.id;
        const update = { $inc: { Likes: -1 } };
        const filter = {Id:id}
        const options = {new:true}
        const data =await BlogsModel.findOneAndUpdate(filter,update,options)
    }
})
module.exports = router

