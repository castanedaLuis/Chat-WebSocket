
module.exports =  (req, res , next) =>{

    const validation = req.cookies.username;
    if(validation){
        next();
    }else{
        res.redirect('/register');
    }
}