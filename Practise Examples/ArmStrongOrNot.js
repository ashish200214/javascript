function cubeOfNumber(n){
    return n*n*n;
}


function armStrongOrNot(n){
    let original=n,check,rem,armstrong=0;
    while(n!=0){
        rem=n%10;
        armstrong=armstrong+cubeOfNumber(rem);
        n=Math.floor(n/10);
    }
    if(original==armstrong){
        console.log("Armstrong Number ");
    }
    else{
        console.log("Not Armstrong Number ");
    }
}

armStrongOrNot(153);