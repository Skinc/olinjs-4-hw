
/*
 * GET home page.
 */

exports.index = function(req, res){
    console.log(req.body)
    res.send("hi")  
};