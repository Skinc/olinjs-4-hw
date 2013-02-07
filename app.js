
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , user = require("./routes/user")
  , mongoose = require('mongoose')
  , mainpage = require("./routes/mainpage")
  ;

var app = express();

app.configure(function(){
  mongoose.connect(process.env.MONGOLAB_URI || 'localhost/tweeter');
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(process.env.SECRET || 'fake_secret'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

});


app.configure('development', function(){
  app.use(express.errorHandler());
});


app.get('/', mainpage.start);
app.post('/', mainpage.start);
app.get("/twit/all", mainpage.update);
app.get('/users/new', user.start);
app.post('/users/new', user.signin);
app.post('/twit/new', user.newtwit);

  

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
