const mongoose=require('mongoose');
const ObjectId=mongoose.Types.ObjectId;

const Schema=mongoose.Schema;// Schema is class which has been exported by mongoose library


// //connecting to database
// const connectionString="mongodb+srv://mrvishalvtoglur149:ABMCYbchl0ScYHiX@cluster0.otcwy.mongodb.net/coursera-app-db";
// mongoose.connect(connectionString)
// .then(()=>{
//    console.log('Succesfully connected to mongoDB');
// }).catch((error)=>{
//     console.log('Error connecting to Database',error);
// })


const UserSchema=new Schema({
    email:{type:String,unique:true},//this ensures for one email should be signed up only once
    password:String,
    firstName:String,
    lastName:String
})

const AdminSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const CourseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
})

const PurchaseSchema=new Schema({
   userId:ObjectId,
   courseId:ObjectId
})

const userModel=mongoose.model('users',UserSchema);
const adminModel=mongoose.model('admins',AdminSchema)
const courseModel=mongoose.model('courses',CourseSchema);
const purchaseModel=mongoose.model('purchases',PurchaseSchema);

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}

