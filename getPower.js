//get power of the base and exponent

function getPower(base,exp){
  let power=1;

  for(let i=1;i<=exp;i++){
    power=power*base;
  }
  return power;
}

let base=+prompt("enter base");
let exp = +prompt("enter exponenet")
console.log(getPower(base,exp));

