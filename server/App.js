const express = require("express")
const app = express()
const database = require("./DB/Database")
database()
app.use(express.json())
const port = 3000
app.use("/api/blogs",require("./Router/Blogs"))
app.use("/api/auth",require("./Router/Auth"))
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})