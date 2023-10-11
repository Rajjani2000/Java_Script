const a= [1,2,3,4,5,6,7,8,9,10];
const b = [11,12,13,14,15];



function add(a)
{
    const inc = a +1;
    console.log(`number is ${a} and  with incremet is ${inc}`);

}


function sub(a)
{
   const dec = a -1;
   console.log(`number is ${a} and  with Decremet is ${dec}`);


}

function div(a)
{
    const div = a/2;
    console.log(`number is ${a} and with division is ${div}`);


}




function square(a)
{
    const squ = a * a;
    console.log(`nuber is ${a} and with square it would be ${squ}`);

}


function concate(x,y)
{
 const z = x.concat(y)
 return z;

}




a.forEach(add);
a.forEach(sub);
a.forEach(div)
a.forEach(square);


const v = concate(a,b);
console.log("concate is ", v)

const w = a.filter(ele =>{
    return ele%2 == 0
})
console.log(w)