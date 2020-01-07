var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var session = require('express-session');


dotenv.config();

//Import Routes
var login =  require('./routes/login');
var register =  require('./routes/register');
var balanced =  require('./routes/balanced');

//DB Connectivity
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err)
        console.log('Connect to DB');
});


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({ 
    secret: process.env.TOKEN_SECRET, 
    resave: false, 
    saveUninitialized: true, 
    cookie: {
        maxAge: 360000,
        httpOnly: true,
        // secure: true
    }
}));


//Routes Middleware
app.use('/task', login);
app.use('/task', register);
app.use('/task', balanced);

app.listen(3000, ()=>console.log('Server is listening to the Port 3000'));