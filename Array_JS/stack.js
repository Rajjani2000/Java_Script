let stack_size = 4;
let  a =["ra","kr","ja","ja","ja"];
d =[]



for (let i =0;i<=a.length-1;i++)
{
   d.push(a[i])
}


if (d.length >stack_size)
{
    console.log("stack over flow")


}
else if (d.length == 0)
{
    console.log("stack Empty...")
}
else
{
     console.log("stack has elements")
}