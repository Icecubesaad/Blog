const jwt = require("jsonwebtoken")
const jwt_secret = "ICECUBE"
const fetchDetails = async(req,res,next)=>{
    const token = req.header("jwt_token")
    if(token){
        const verify = jwt.verify(token,jwt_secret)
        if(verify){
            req.User_id = verify.User_id
            next()
        }
        else{
            res.send({error:"Server error"})
        }
    }
    else{
        res.send("Invalid error")
    }
}
module.exports = fetchDetails