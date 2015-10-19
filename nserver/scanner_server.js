var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var scanner = io.of('/scanner'); 

var BTDevices = ["a4d856039ebf", "ee443390fa9d", "fb738cf43b8a"];

var log4js = require('log4js');
var logger = log4js.getLogger();

scanner.on('connection', function(socket) {
 
    logger.debug('Scanner Connected');
    
//    socket.on('deviceData', function(msg) {
/*
    socket.on('uuid', function(uuid) {
        logger.debug('uuid: ' + uuid);
        //recived message from scanner
        //do some processing here
    });
*/
    socket.on('rssi', function(rssi) { 
        logger.debug('rssi: ' + rssi); 
        //recived message from scanner 
        //do some processing here
    }); 
  
    socket.on('disconnect', function() {
        logger.debug('Scanner Disconnected');
    });
});
 
http.listen(3000, function() {
    logger.debug('listening on *:3000');
});
