var jwt = require('jsonwebtoken');
var bcrypt =  require('bcryptjs');

var Login = require('../model/login_model');
var User = require('../model/register_model');
// var {loginValidation} = require('../Validations/validation');

exports.auth = async (req,res)=>{
    // const {error} = loginValidation(req.body);
    // if(error) 
    //     return res.status(400).send(error.details[0].message);

    //Checking is the user exist
    const user= await User.findOne({email: req.body.email});
    if(!user)
        return res.status(400).send('User is not registered with this email');
       
    //Check Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass)
        return res.status(400).send('Invalid Password');
    
    var salt = await bcrypt.genSalt(10);
    var hashPassword = await bcrypt.hash(req.body.password, salt);

    //Create and ssign a token
    const token = jwt.sign({userid: user._id, loginid: user.email}, process.env.TOKEN_SECRET, {
        expiresIn: 86400 });
    req.session.auth_token = token;

    var login = new Login({
        username: user.username,
        email: req.body.email,
        password: hashPassword

    });
    req.session.login = login;

    try{
        if(login.save())
            res.send({
                email: req.body.email,
                auth: true,
                token: token,
                message: "Success"

            });
            console.log(req.session.login.username);
    }catch(err){
        res.status(400).send(err);
    }
}