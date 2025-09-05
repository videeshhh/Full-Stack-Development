function setTimeoutPromise(duration){
    return new Promise(function(resolve){
        setTimeout(resolve , duration);
    });
}

//promise chaining

setTimeoutPromise(1000).then(function(){
    console.log("hi");
    return setTimeoutPromise(3000);
}).then(function(){
    console.log("hello");
    return setTimeoutPromise(5000);
}).then(function(){
    console.log("Hey there")
})