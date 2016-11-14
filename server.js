/**
 * Created by Administrator on 2016/8/8.
 */
'use strict';

var express = require('express');
    //http = require('http');
var app = express();


  //var server = http.createServer(function (req, res){
  //
  //  console.log('what should i do ');
  //
  //  res.writeHead(200, {'Content-Type': 'text/plain'});
  //
  //  // 发送响应数据 "Hello World"
  //  res.end('Hello World\n');
  //
  //  console.log('open  server success!');
  //
  //}).listen(1000);

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {

  res.send('open this  file in the end!');

});

app.get('/main', function (req, res) {

  res.send('main  should  display');

});

app.listen(3000);

console.log('log success!');



exports = module.exports = app;




//var express =  require('express');
//var app = express();
//exports = module.exports = function(path){
//  app.use("/", express.static(__dirname + path));
//  app.listen(8000);
//
//  console.log('handling static files :',__dirname + path);
//};


