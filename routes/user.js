var model = require('../model.js') 
var user = model.user;
var twit = model.twit;


exports.start = function(req, res){
    console.log(req.session.user)
    res.render('newuser', {title: "Tweeter SignIn"});
};


exports.signin = function(req, res){
    console.log(req.body)
    user.find({name:req.body.user}).exec(function(err, orders) {
        console.log(orders.length)
        if (orders.length<1){
            var newuser = new user({name:req.body.user})
            newuser.save(function(){}); 
        }   
        req.session.user = req.body.user
        res.redirect("/")  
    }); 
 };


exports.newtwit = function(req, res){
    console.log(req.session.user)
    console.log(req.body)
    var newtwit = new twit({user:req.session.user, twit:req.body.twit})
    newtwit.save(function(){})
    res.send()
};