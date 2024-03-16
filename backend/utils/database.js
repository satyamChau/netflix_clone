import mongoose from "mongoose"
import dotenv from "dotenv"
// dotenv.config({
//     path:"../.env"
// })
const connecturi=`mongodb+srv://chauhansatyam0000:1234@cluster0.51uagjo.mongodb.net/test?
retryWrites=true&w=majority&appName=Cluster0`
const databaseConnection = () =>{
    mongoose.connect(connecturi).then(()=>{
        console.log("mongodb connected  successfully");

    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;



