var cheerio =require('cheerio');
var request = require('request');

request("https://news.ycombinator.com",function(err,response,html)
{
    if(!err && response.statusCode == 200)
    {
        var $ = cheerio.load(html);

        total = 0;

        $('span.score').each(function(i,element){

             var points = parseInt($(this).text().replace(" points",""));
            total += points;
            // console.log(points)
        });
        console.log(total)
        
    
    }
});

