let stw = 1;
function callback(){
    console.clear();
    console.log(stw);
    stw = stw + 1;
}

setInterval(callback , 1000);




