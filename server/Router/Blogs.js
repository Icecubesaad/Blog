const express = require("express")
const router = express.Router()
const BlogsModel = require("../Model/Blogs")
const middleware = require("../Middleware/Middleware")
const { v4: uuidv4 } = require('uuid');
router.post("/Post",middleware,async(req,res)=>{
    const Time = new Date();
    const {title,description,tags,user,fields,image} = req.body;
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
        Id:uuidv4(),
        Type:fields,
        Image:image
    })
    res.send(Saving)
})
router.get("/get/:id",async(req,res)=>{
    const id = req.params.id;
    if(id === "undefined"){
        const blogs =await BlogsModel.find() 
        res.send(blogs)
    }
    else{
        const blogs =await BlogsModel.find({Type:id})
        res.send(blogs)
    }
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
router.get("/hot",async(req,res)=>{
    const date = new Date();
    const data = await BlogsModel.find();
    let mostLiked = {
        Likes : 0,
        month:0,
    };
    let HotPosts = [];
    let secondLiked = {
        Likes : 0,
        month:0,
    };;
    let ThirdLiked = {
        Likes : 0,
        month:0,
    };
    data.map((e)=>{
        if(e.Likes > mostLiked.Likes){
            mostLiked = e;
        }
    })
    data.map((e)=>{
        if(e.Likes > secondLiked.Likes && secondLiked.Likes<mostLiked.Likes && e.Likes != mostLiked.Likes){
            secondLiked = e;
        }
    })
    data.map((e)=>{
        if(e.Likes > ThirdLiked.Likes && ThirdLiked.Likes < secondLiked.Likes && e.Likes != mostLiked.Likes &&  e.Likes != secondLiked.Likes){
            ThirdLiked = e;
        }
    })
    if(mostLiked.Date.some(e=>e.month === date.getMonth())){
        HotPosts.push(mostLiked)
    }
    if(secondLiked.Date.some((e)=>e.month === date.getMonth())){

        HotPosts.push(secondLiked)
    }
    if(ThirdLiked.Date.some((e)=>e.month === date.getMonth())){

        HotPosts.push(ThirdLiked)
    }
    res.send(HotPosts)
})
module.exports = router

