  //Strong number or not  if the sum of factorial of each digit of the number is equal to original no then it is strong number.

function getFactorial(n){
  let fact=1;
  for(let i=1;i<=n;i++){
    fact=fact*i;
  }
  return fact;
}

function strongOrNot(n)
{
  let original=n;
  let rem,sum=0;
  while(n!=0)
  {
    rem=n%10;
    sum=sum+getFactorial(rem);
    n=Math.floor(n/10);

  }
  if(original===sum){
    return true;
  }
  else{
    return false;
  }
}

function display(start,end){
  for(let i=1;i<=end;i++){
    if(strongOrNot(i)){
      console.log(i);
    }
  }
}

display(1,1000);
