var bcrypt =  require('bcryptjs');

var User = require('../model/register_model');
// var {registerValidation} = require('../validation');
var hashPassword;
exports.register = async (req,res)=>{

    //Lets Validate the data before a user
    // const {error} = registerValidation(req.body);
    // if(error) 
    //     return res.status(400).send(error.details[0].message);

    //Checking if the user is already in the Database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist)
        return res.status(400).send('Email already Exist');

    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    
console.log(hashPassword);
    //Create a new user
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        DOB: req.body.DOB,
        role: req.body.role
    });
    try{
        if(user.save())
            res.status(200).send("Success");             
    }catch(err){
        res.status(400).send("Error"+err);
    }
}