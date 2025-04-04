const adminAuth = (req, res, next) => {
    let token = 'xyz';
    let isAutherized = token === 'xyz';
    if(!isAutherized){
        res.status(401).send('Unauthorized request')
    }else{
        next();
    }

}

const userAuth = (req, res, next) => {
    let token = 'xyz';
    let isAutherized = token === 'xyz';
    if(!isAutherized){
        res.status(401).send('Unauthorized request')
    }else{
        next();
    }

}

module.exports = {
    adminAuth,
    userAuth
}