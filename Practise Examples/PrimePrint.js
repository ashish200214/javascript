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
    return false;
  }
  else{
    return true;
  }
  
}

function display(start,end){
  if(start<=1){
    console.log("Please Enter The Value greater than 2");
  }
  else
  {
    for(let i=start;i<=end;i++){
    if(checkPrimeOrNot(i)){
      console.log(i+" ");
    }
  }
  }
}


display(2,100);
