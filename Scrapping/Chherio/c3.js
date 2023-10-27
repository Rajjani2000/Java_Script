//import cheerio library
var cheerio = require('cheerio')

//import request libray
var request = require('request');

request("https://www.programiz.com/java-programming/online-compiler",function(error,response,html)
{
    var $ = cheerio.load(html);

    var b = $('span.logo-sub-title-wrapper').text();
    console.log(b);
    





});