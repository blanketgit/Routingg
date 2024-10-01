const {Router}=require('express');
const adminRouter=Router();
const {adminModel}=require('./db')


console.log("i am from admin.js file")

adminRouter.post("/signup",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

adminRouter.post("/signin",function(req,res){
    res.json({
        message:"signin endpoint"
    })
})

adminRouter.post('/',function(req,res){
    res.json({
        message:"admin course endpoint"
    })
})

adminRouter.put('/course',function(req,res){
    res.json({
        message:"endpoint to update course"
    })
})

adminRouter.get('/course/bulk',function(req,res){
    res.json({
        message:"epoint to get courses"
    })
})

module.exports={
    adminRouter:adminRouter
}