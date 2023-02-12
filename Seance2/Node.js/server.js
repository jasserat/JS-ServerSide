var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    //var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query)
    //console.log(page);
    res.writeHead(200, {"Content-Type":"text/html"});
   /* res.write('<!DOCTYPE html>'+
'<html>'+
'   <head>'+
'       <meta charset="utf-8"/>'+
'       <title>Ma page Node.js !</title>'+
'   </head>'+
'   <body>'+
'       <p>Voici un paragraphe <strong>HTML</strong> !</p>'+
'   </body>'+
'</html>');*/


    /*if (page =='/'){
        res.write('vous êtes dans la page d\'accueil');
    }
    else if (page == '/Contact') {
        res.write('vous êtes dans la page Contact !');
    }
    else if (page == '/Affichage/1/user') {
        res.write('Afficher l\'utilisateur qui a l\'id 1');
    }*/

    if ('id' in params && 'login' in params){
        res.write('votre id est '+ params['id']+' et votre login '+params['login']);
    }
    else{
        res.write('veuillez sasir votre id et login!');
    }
    res.end();
});
server.listen(8080);
