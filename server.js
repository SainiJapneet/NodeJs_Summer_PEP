var http = require("http");
var myModule = require("./myModule");
var myModule1 = require("./myModule1")
//For displaying html in server
/*
1. find the file and open it
2. show the data present in it.
fs.readFile(filePath, function(err,data){})
*/
var fs = require("fs")//fs = file system, it can access all the files present on storage of our device

http.createServer(function(req,res){

    fs.readFile("index.html", function (err,data){
        //write head is function inside response
        res.writeHead(200,{
            "Content-Type": "text/html",
        });
        res.write(data);
        res.write("We have imported - " + myModule.sayHello());
        res.write("<br>Current Date : " + myModule.getDate());
        res.write("<br>Imported module1 : " + myModule1.welcomeMsg());
        res.write("<br>" + myModule1.wishMsg());
        res.end("")
    });

}).listen(8080);