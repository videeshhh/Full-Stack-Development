function arr(users){
    for (let i=0 ; i<users.length; i++){
        let user = users[i];
        if (user.age >= 18 && user.gender==="Male"){
            console.log("HI " + user.userName + "You are allowed to enter male section");
        } else {
        console.log("Hi " + user.userName + "You are not allowed to enter males section");
        }
    }   
}


let users=[{
    userName:"videesh sharma ",
    age : 18,
    gender : "Male"
},
{
    userName:"Divya anand tiwary ",
    age : 17,
    gender: "Female",
},
{
    userName: "DaddyX ",
    age: 18,
    gender :"Male"
}]

arr(users);
