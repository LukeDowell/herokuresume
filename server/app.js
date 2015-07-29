/**
 * Created by lukedowell on 7/29/15.
 */
var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get("/*", function(req, res) {
    var file = req.params[0] || "./views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
});

var server = app.listen(app.get('port'), function() {
    console.log("Listening on port: " + app.get("port"));
});