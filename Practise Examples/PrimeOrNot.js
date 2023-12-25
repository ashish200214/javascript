//Prime number or not.

function checkPrimeOrNot(n){
  let flag=1;
  for(let i=2;i<n;i++)
  {
    
    if(n%i===0){
      flag=0;
      break;
    }
  }

  if(flag===0){
    console.log("Not Prime Number");
  }
  else{
    console.log("Prime Number");
  }
  
}

checkPrimeOrNot(23);
