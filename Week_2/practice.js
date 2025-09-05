// function random(resolve){
//     setTimeout(resolve , 3000)
// }

// let p= new Promise(random);

// function callback(){
//     console.log("promice called");
// }
// p.then(callback)    



//promisified of read file and cleanfile 
// const fs = require('fs');

// function readTheFile(finalValue){
//     fs.readFile("a.txt" , "utf-8" , function(err , data){
//         finalValue(data);
//     })
// }
 
// function readFile(){
//     return new Promise(readTheFile);
// }

// let c = readFile();
// let b = readFile1();

// function callback(contents){
//     console.log(contents);
// }

// c.then(callback)

const fs = require('fs');

function readFileAsync(){
    return new Promise(function(resolve, reject){
        fs.readFile("a.txt"  , "utf-8" , function(err, data){
            if(err){
                reject("File not found");
            }else{
                resolve(data);
            }
            })
    })
}

readFileAsync()
    .then(function(x){
        console.log("File has been read" + x);
    })
    .catch(function(e){
        console.log(e);
    })