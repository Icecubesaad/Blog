const express = require("express")
const app = express()
const database = require("./DB/Database")
const router = express.Router()
database()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 100000 }));
app.use(express.json({ limit: '500mb' }));

const port = 3000
router.get("/",(req,res)=>{
    res.send("Hello niggas")
})
app.use("/api/blogs",require("./Router/Blogs"))
app.use("/api/auth",require("./Router/Auth"))

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
