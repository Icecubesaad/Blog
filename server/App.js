const express = require("express")
const app = express()
const port = 3000
app.use("/api/blogs",require("./Router/"))
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})