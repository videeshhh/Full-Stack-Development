function setTimeoutPromise(duration){
    return new Promise(function(resolve){
        setTimeout(resolve , duration);
    });
}


async function solve(){
    await setTimeoutPromise(1000);
    console.log("1 second have passed");
    await setTimeoutPromise(3000);
    console.log("4 second have passed");
    await setTimeoutPromise(5000);
    console.log("9 seconds have passed")
}

solve();