arr = [1,2,3,4,5,6,7,8,9]
do
{
let b =process.argv[2];
b= Number.parseInt(b);
arr.push(b)

}
while( b !=0 );
{
    console.log(arr)
}