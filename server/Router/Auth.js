const express = require("express");
const router = express.Router();
const UserModel = require("../Model/Auth");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")
const jwt_secret = "ICECUBE";
const middleware = require("../Middleware/Middleware")
router.post(
  "/Signup",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("name").isLength({ min: 10 }),
  ],
  async (req, res) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const emailErrors = errors.array({
        onlyErrors: true,
        attributeFilter: "email",
      });
      const passwordErrors = errors.array({
        onlyErrors: true,
        attributeFilter: "password",
      });
      if (emailErrors.length > 0 && passwordErrors.length > 0) {
        return res.status(422).json({ emailErrors, passwordErrors });
      } else if (emailErrors.length > 0) {
        return res.status(405).json({ emailErrors });
      } else if (passwordErrors.length > 0) {
        return res.status(401).json({ passwordErrors });
      }
    }
    try {
      const already_exist = await UserModel.findOne({ Email: email });
      const User_replica = await UserModel.findOne({ Username: name });
      if (already_exist) {
        res.send({ error: "User already exists" });
      } else {
        if (User_replica) {
          res.send({ error: "Username is already taken" });
        } else {
            const salt = await bcrypt.genSalt(10);
            const parsedPass = await bcrypt.hash(password,salt)
          const Saving = await UserModel.create({
            Username: name,
            Email: email,
            Password: parsedPass,
          });
          res.send(Saving)
        }
      }
    } catch (error) {
      res.send({error});
    }

  }
);
router.post("/Signin",async(req,res)=>{
    const {email,password} = req.body;
    const User_auth = await UserModel.findOne({Email:email})
    if(!User_auth){
        res.send({errors:"NAHHH"})
    }
    else{
        console.log(User_auth)
        const valid = await bcrypt.compare(password,User_auth.Password)
        if(valid){
            const User={
                User_Id:{
                    ID:User_auth.id
                }
            }
            const Token = await jwt.sign(User,jwt_secret)
            res.send(Token)
        }
        else{
            res.send({error:"invalid credidential"})
        }
    }
})
router.get("/Get",middleware,async(req,res)=>{
    const User_id = req.user.ID;
    const User_details = await UserModel.findById(User_id)
    res.send(User_details)
})
module.exports = router;