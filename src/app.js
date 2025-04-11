const express = require('express');
const app = express();
const { adminAuth, userAuth } = require('./utils/middlewares/auth');
const connectDB = require('./config/databaseconnection')
const User = require('./models/user');

require('./config/databaseconnection');

app.post('/signup', async (req, res, next) => {
    // creating a new instance of the user model
    const user = new User({
        firstName : 'Saurabh',
        lastName : 'Bajpai',
        emailid : 'saurabh@gmail.com',
        password: '8298j9320',
        age : 26,
        gender: 'Male'
    });
    try{
        await user.save();
        res.send("User added successfully!!")
    }catch(err){
        res.status(400).send(err, 'getting error');
    }
})

connectDB().then(() => {
    console.log('database connected');
    app.listen(3000, () => {
        console.log('listening on 3000') 
    });  
})
.catch((err) => {
    console.log(err, 'Database is not connected');
}) 
 