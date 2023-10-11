function regular(x)
{
    console.log("I am regular function...");
    x();
}
var anonomus = function()
{
    console.log("I am an  anonomus function...");

}
regular(anonomus);
