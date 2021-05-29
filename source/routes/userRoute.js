const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/usercontroller');


router.get('/', userCtrl.welcomeMessage)

// post request to data to create a new user

  router.post('/users', userCtrl.createNewUser)

  //  GET request to fectch all users
  
  router.get('/users', userCtrl.fetchUsers)
  
  // GET request to fetch single user 
  router.get('/users/:id', userCtrl.fetchSingleUser)
  
  // Update
router.put('/users/:id',userCtrl.updateSingleUser)
  
  // delete
  router.delete('/users/:id',userCtrl.deleteSingleUser)
    module.exports = router;