/** create a connection function
  *start a local mongodb server connection */

 const mongoose = require('mongoose');
 const MONGO_URI = "mongodb://localhost:27017/plapp";
 

 
 // create the connection function
 // async mongoose connection

 const connectDB = () =>{
     
          mongoose.connect(MONGO_URI,{
             useNewUrlParser:true,
             useCreateIndex: true,
             useUnifiedTopology:true,
             useFindAndModify:false
         })
         .then(() => {
            console.log("MongoDB connected");

            //send data
         })
          .catch((err) => {
             console.error(err.message);

             //exit with failure
             process.exit(1);
         
 })
}
 
 module.exports = connectDB