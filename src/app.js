const express = require('express');
const app = express();
const { adminAuth, userAuth } = require('./utils/middlewares/auth');

// Here this authorization is kind of middleware to authorized user...
app.use('/admin', adminAuth);
app.use('/user', userAuth);

app.get('/admin/getAllData', (req, res, next) => {
    // we need to authenticate the api as well
    console.log('get all data');
    res.send('Data fetched ')
})

app.get('/admin/delete', (req, res, next) => {
    console.log('delete data');
    res.send('data delete')
})

app.get('/user/profile', (req, res, next) => {
    res.send('Profile details');
})

app.get('/ab?c', (req, res) => {
    res.send("it will work for the path abc and ac as well, here b is the optional parameter");
})

app.listen(3000, () => {
    console.log('listening on 3000') 
});   