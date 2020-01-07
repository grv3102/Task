var Joi = require('joi');

//Register Validation
const registerValidation = (data) =>{
    var schema = {
        username : Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
        DOB: Joi.string().required(),
        role: Joi.string().required()  
    };
    return Joi.validate(data, schema);
}


//Login Validation
const loginValidation = data =>{
    var schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
}


module.exports.registerValidation =  registerValidation;
module.exports.loginValidation =  loginValidation;
