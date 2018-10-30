var express = require('express')
var app = express()
var bParser = require('body-parser')
app.use(bParser.json());
app.use(bParser.urlencoded({extended:true}));

app.get("/", function(req,res){
var form = '<!DOCTYPE html>\
<html lang="en">\
<head>\
<meta charset="UTF-8">\
<meta name="viewport" content="width=device-width, initial-scale=1.0">\
<meta http-equiv="X-UA-Compatible" content="ie=edge">\
<title>Page</title>\
</head>\
<body>\
<form class="" action="/test_page" method="post">\
<input type="text" name="text" value="Введите текст">\
<button <a href ="https://google.com">Тык!</button>\
</form>\
</body>\
</html>\
'
res.send(form)
})
app.listen('1000',function(){
console.log('сервер работает на порту 1000')
})
app.post ('/test_page',function(req,res){

res.send ('Вроде робит')


})
