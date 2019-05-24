const express = require('express');
const http = require('http');
const fs = require('fs');

let rawdata = fs.readFileSync('schools.json');  
let schools = JSON.parse(rawdata);  
//console.log(schools); 

function searchSchools(name){
    var results = [];
    var searchField = "schoolname";
    var searchVal = name;
    var len = schools.length;
    for (var i=0 ; i < len ; i++)
    {
        if (schools[i]["schoolname"].toString().toLowerCase().indexOf(searchVal.toLowerCase()) != -1
            || schools[i]["address"].toString().toLowerCase().indexOf(searchVal.toLowerCase()) != -1
            || schools[i]["area"].toString().toLowerCase().indexOf(searchVal.toLowerCase()) != -1
            || schools[i]["pincode"].toString() == searchVal
            || schools[i]["landmark"].toString().toLowerCase().indexOf(searchVal.toLowerCase()) != -1 ) {
            results.push(schools[i]);
        }
    }

    return JSON.stringify(results);
}

//console.log(searchSchools('halli'));




var app = express();

app.get('/search', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
  res.end(searchSchools(req.query.searchFor));
});

app.get('/getData', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(schools));
  });

app.listen(3000);