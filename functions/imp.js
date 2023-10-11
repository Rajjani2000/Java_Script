// define anonomus function write inside parameter

function regular(x)
{
    console.log("I am regular Functionss..");
    x();

}
regular(function()
{
    console.log("I am anonomus function...");
});