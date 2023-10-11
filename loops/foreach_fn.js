const myarr = [1,2,3,4,5,6,7,8,9];



function double(number)
{
    const twice = number *2;
    console.log(`double of ${number} is ${twice}`);


}

function increment(number)
{
 const inc = number +1;
 console.log(`number is ${number} and with increment is ${inc}`);

}

function decrement(number)
{
    const dec = number -1 ;
    console.log(`nuber is ${number} and with decrement is ${dec}`);


}












myarr.forEach(double)
myarr.forEach(increment)
myarr.forEach(decrement)
