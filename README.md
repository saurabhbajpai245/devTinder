# ^4.19.2
    -- 4 -> major version -- Some major updapte which can leads to break your code.
    -- 19 -> minor version -- some additional features added which also support backward version as well
    -- 2 -> patch version -- some small bug fix or any change

# ^ -> it automatically updates minor and patch version only.
# ~ -> Allows updates only to the patch version, meaning only bug fixes, not any new features.

# app.use(cb()) -> here cb function known as request handler function

# create a local repository using command  
    -- git init
    -- git add . (adding all the files to stage, you can also specify a single file as well like git add app.js)
    -- git commit -m "commiting the stage changes to local repository"

# Now you create remote reposiory and connect local repository with remote one using following commands

    -- git remote add origin https://github.com/saurabhbajpai245/devTinder.git
    -- git branch -M main   
    -- git push -u origin main

# For learning
    -- difference b/w app.use and app.all
    
# just some general knowlege 
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

app.get('/getInfo', (req, res, next) => {
    try{
        throw new Error('Some random error')
    }catch(err){
        res.status(500).send('some error occured')
    }
    res.send('something');
})

app.get('/ab?c', (req, res) => {
    res.send("it will work for the path abc and ac as well, here b is the optional parameter");
})

app.use('/', (err, req, res, next) => {
    if(err){
        res.status(500).send('Some error')
    }
})