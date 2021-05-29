const User = require('../models/user');

exports.welcomeMessage = function(req, res, next){
  res.status(200).send("Welcome to Mariam's world")
}

exports.createNewUser = function(req, res){
    // retrieve new book details from the body
    const user = req.body;
  User.create({
    name: user.name,
    email: user.email,
    country:user.country
  },(err,newUser) =>{
       if (err){
         return res.status(500).json({ message:err});
       }else{
         return res.status(200).json({message:"New user created successfully",newUser});
       }
  })
  }

  exports.fetchUsers =  (req, res)=>{
    // fetch all users
    
  User.find({},(err,users) =>{
       if (err){
         return res.status(500).json({ message:err});
       }else{
         return res.status(200).json({message:"Users retrived successfully", users});
       }
  })
  }

  exports.fetchSingleUser = (req, res)=>{
    
    // fetch  user
    
  User.findOne({_id:req.params.id},(err,user) =>{
       if (err){
         return res.status(500).json({ message:err});
       }else if(!user){
        return res.status(404).json({message:" User not found"});
       }else{
         return res.status(200).json({message:"Single user", user});
       }
  })
}

exports.updateSingleUser = (req, res)=>{
    
    //  find and update  user
    User.findByIdAndUpdate(req.params.id,{
         name: req.body.name,
         email: req.body.email,
         country:req.body.country
  },(err,user) =>{
       if (err){
         return res.status(500).json({ message:err});
       }else if(!user){
        return res.status(404).json({message:" User not found"});
       }else{
         user.save((err,savedUser)=>{
           if(err){
            return res.status(400).json({message:err});
           }else{
          return res.status(200).json({message:"User updated successfully"});
          }
         })
        }
  }
  )
    
    }

    exports.deleteSingleUser = (req, res)=>{
    
        //  find and delete  user
        User.findByIdAndDelete(req.params.id,(err,user) =>{
           if (err){
             return res.status(500).json({ message:err});
           }else if(!user){
            return res.status(404).json({message:" User not found"});
           }else{
              return res.status(200).json({message:"New user deleted successfully "});
              }
             })
            }