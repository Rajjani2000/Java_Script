function foo(b)
{
    var a =5;
    return a * b +10;
}
function bar(x) //push 2
{
    var y=3;
    return foo(x*y);

}
console.log(bar(6)); //push1  after Main