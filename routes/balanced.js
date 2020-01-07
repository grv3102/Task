var router = require('express').Router();
var verify = require('../controller/verify_token');
var Api = require('../model/balanced_model');

var count=0;
var status= "";
router.post('/api',verify, (req,res)=>{
    
    
    class Stack extends Array{
        constructor(...elems) {
            super(...elems)
        }
        peek(){
            if(this.length === 0) throw new Error ('Stack is Empty.');
            return this[this.length-1];
        }
        size(){
            return this.length;
        }
    }
    
    function check(string){
            const arrPara = string.split('');
            const stackPara = new Stack();
            for(let i=0; i<arrPara.length;i++){
                const currentEle = arrPara[i];
                if(currentEle === '[' || currentEle === '{' || currentEle === '('){
                    stackPara.push(currentEle);
                }else{
                    if(stackPara.size() === 0){
                        return false;
                    }
                    const lastEle = stackPara.peek();
                    stackPara.pop();
                    if(lastEle === '[' && currentEle === ']'){
                    }else if(lastEle === '(' && currentEle === ')'){
                    }else if(lastEle === '{' && currentEle === '}'){
                    }else{
                        return false;
                    }
                }
            }
            if(stackPara.size() != 0){
                return false;
            }
            return true;
    }

  

    var value = req.body.input;
    var result = check(value);
    
    if(result != false){
        status = "Success";
        count = ++count;
    }else{
        status = "Unbalanced";
        count= ++count;
    }

    
    var api = new Api({
        input: req.body.input,
        username: req.session.login.username,
        message: status,
        attempts: count
    });

  
    
    try{
        if(api.save())
            res.send({
                username: req.session.login.username,
                message: status,
                attempts: count
            });
            // console.log(req.session);
    }catch(err){
        res.status(400).send(err);
    }
    console.log(req.session.login.username);
});

module.exports = router;