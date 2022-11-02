	function primeno(num)
	{
    let count=0;
for(let i=1;i<=num;i++)
  {
    if(num%i==0)
    {
      count++;
    }
  }
if(count==2)
{
 return true;
}
return false;
}
let bag=primeno(13)
if(bag==true)
{
	console.log("prime no");
}
else
{
 console.log("not a prime no")
} 