var express = require('express');
var app = express();

var jwt = require('jsonwebtoken');

app.use((err, req, res, next)=>{
    res.json(err);
});

module.exports = (req,res,next)=>{
    var token = req.session['auth_token'];
    // console.log(req.session)

    if(!token)
        return res.status(401).send('Access denied');
    try{
        var verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }
}
