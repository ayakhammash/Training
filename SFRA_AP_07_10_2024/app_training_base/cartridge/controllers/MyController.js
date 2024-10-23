'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');
var Resource = require('dw/web/Resource');

// Render page1.isml
server.get('Show', function (req, res, next) {
    res.render('page1');
    next();
});

// Handle form input and render page2.isml
server.post('HandleForm', function (req, res, next) {
    var input = parseInt(req.form.inputNumber, 10);
    var output = input + 10;

    res.render('page2', {
        message: Resource.msg('message.title', 'myproperties', null),
        result: output
    });

    next();
});

module.exports = server.exports();
