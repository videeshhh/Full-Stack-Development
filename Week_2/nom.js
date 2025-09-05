function sum(a ,b){
    return a + b;
}

function divide(a, b){
    return a / b;
}

function doOperation(a,b,op){
    let val= op(a,b)
    return val;
}
function timeout(){
    console.log(nom2);
}
setTimeout(timeout , 5000)
  
let nom= doOperation(3,6,sum);
console.log(nom); 

let nom2= doOperation(2,5 , sum);
