//Routing in express,the express Router
const express=require("express");
const app=express();
const mongoose=require('mongoose');
app.use(express.json());

//importing userRouter and courseRouter from uer file and course file
const {userRouter}=require('./user');
const {courseRouter}=require('./course');
const {adminRouter}=require('./admin')



//main /user router and main /course router
app.use('api/v1//user',userRouter);
app.use('api/v1/admin',adminRouter);
app.use('api/v1/course',courseRouter);


//app.listen(3000);

// here what mistake we were doing is we are cnnecting to port number 3000 even before confirming whether our 
//application has connected to datbase how means when we run node index.js it starts executing index.js file 
//so even defore connecting to database server starts to listen on port 3000 the solution is
// we shoud make  function named main fnction in index.js file and call that function at bottom of index.js
//now the below is main function

async function main(){
    //we should use dotenv(.env)
     await mongoose.connect("mongodb+srv://mrvishalvtoglur149:ABMCYbchl0ScYHiX@cluster0.otcwy.mongodb.net/coursera-app-db");
     app.listen(3000);
     console.log("listening on port 3000");
}

main();

// now what will happen is index.js file starts to execute at the bottom main function will be called an d main function
//starts to execute in the main function whem te control goes to await it waits there only until response comes from
//mongoose.connect once response comes app.listen will be executed and an dgets conncted port number 3000