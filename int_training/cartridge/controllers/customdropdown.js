'use strict';

var app = require('app_gmo_controllers/cartridge/scripts/app');
var guard = require('app_gmo_controllers/cartridge/scripts/guard');
var ArrayList = require('dw/util/ArrayList');
function start(){
    
    var test = new Array('2','3','4','7','8') ;
    app.getView({
        myVar: 'my new var custom dropdown',
        myTestValue: test
    }).render('customdropdown/display');
}

exports.Start = guard.ensure(['get'], start);