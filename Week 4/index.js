const express = require("express");
const app = express();

const users = [{
    name: 'John',
    kidneys: [{
        healthy : false
    }]
}];

app.get("/", (req, res)=>{
    const kidneys = users[0].kidneys;
    const numberOfKidney = kidneys.length;
    const numberOfHealthyKidneys = 0;
    for (let i =0; i<kidneys.length; i++){
        if(kidneys[i].healthy){
        numberOfHealthyKidneys += 1;
        }}
    const numberOfUnealthyKidneys =  numberOfKidney - numberOfHealthyKidneys ;
    res.json({
        kidneys,
        numberOfHealthyKidneys,
        numberOfUnealthyKidneys
    });
});



app.listen(3000);