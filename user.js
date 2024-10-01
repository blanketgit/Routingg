
// const express=require('express');
// const Router=express("express");
          // OR
  const {Router}=require('express');
  const bcrypt=require("bcrypt");
  const userRouter=Router();
  const {userModel,purchaseModel,courseModel}=require('./db');
  const jwt=require("jsonwebtoken");
  const JWT_SECRET="always710";

//this app handles all the routers requests which comes to "user" router

//before writing:-> userRouter.post(/signup); we wrote
//app.post('/signup or signin') function(req,res){
//  }. we wrote app.post('/user/signup or signin') function(req,res){
//} now below we have removed /user because now /user route will be defined in index.js and whatever request 
// comes to  user routes those all requests will be redirected to this user.js file whichever will be ,
//matched that will be executed



userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;
    //TODO adding zod validation

    try {
        // Check if user already exists
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 5);
        
        // Create new user
        const newUser = await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,  
            lastName: lastName
        });

        res.status(201).json({ message: "You are signed up", userId: newUser._id });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Error during signup", error: error.message });
    }
});




     //SIGNIN ENDPOINT
userRouter.post("/signin",async function(req,res){
    const {email,password}=req.body;

   const user=await userModel.findOne({
          email:email,
        
   })

   if(user){
    const token=jwt.sign({
        id:user._id,

    },JWT_SECRET);
    
      res.json({
        token: token
    })
   }
    else{
        res.status(403).json({
            message:"incorrrect credentials"
        })
    }
    
})

userRouter.get('purchases',function(req,res){
    res.json({
        message:"signup endpoint"
    })
})


//now we have to export userRouter bcz we have to use this main index.js server file our database will be connected into that
//index.js server file

module.exports={
    userRouter:userRouter
}