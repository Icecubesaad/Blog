const mongoose = require("mongoose")
const {Schema} = mongoose;
const Model = new Schema({
    Title:{
        type:String,
        require:true
    },
    Description:{
        type:String,
        require:true
    },
    Tags:{
        type:String
    },
    Date:{
        type:Array
    }
})
const BlogsModel = mongoose.model("Blogs",Model)
BlogsModel.createIndexes()
module.exports = BlogsModel