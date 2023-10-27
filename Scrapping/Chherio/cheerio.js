var cheerio = require('cheerio');
const request = require('request');


request("https://news.ycombinator.com",function(err,reponse,html){
    if(!err && reponse.statusCode == 200)
    {
        var $ = cheerio.load(html);

        $('td.title').each(function(i,element){

            console.log($(this).text());






            

        });



    }
});