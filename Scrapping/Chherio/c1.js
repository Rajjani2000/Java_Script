var cheerio = require('cheerio');
var request = require('request');


request("https://catalog.towson.edu/undergraduate/fisher-science-mathematics/computer-information-sciences/computer-science-software-engineering/",function(err,reponse,html)
{
    var $ = cheerio.load(html);
    const c = $('h1.page-title').text();
    console.log(c)



});