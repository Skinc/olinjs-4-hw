var model = require('../model.js') 
var user = model.user;
var twit = model.twit;

exports.start = function(req, res){
    twit.find({}).sort("-_id").exec(function(err, twits) {
        res.render("mainpage", {title: "Tweeter", user: req.session.user, twits: twits} )
        // if (req.session.user){
            
        // }
        // else{
        //     res.render("mainpage", {title: "Tweeter", user: "Please sign in!", twits: twits} )            
        // }
    }); 
 }; 

 exports.update = function(req, res) {
    twit.find({}).sort("-_id").exec(function(err, twits) {
        res.render("_twits", {title: "Tweeter", user: req.session.user, twits: twits} )
    }); 
 }