var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 4304));

app.use(express.static(__dirname + '/'));

// views is directory for all template files
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);


//ROUTING
var routes = ['/', '/dashboard', '/events', '/calendar',
    '/courses', '/about', '/gallery', 'courses/detail/*'];
app.get(routes, function (request, response) {
    response.render('index.html');
});


//require('cors');
//app.use(cors());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Request Not Found');
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    if (err.status == 404)
        res.render('404.html');
    else res.send("500 internal server error.");
});


//START SERVER
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
