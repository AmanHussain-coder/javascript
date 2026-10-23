// singleton 

// object litrals 
const mySym = Symbol("key1");

const jsuser ={
    name: "Aman",
    age : 18,
    [mySym] : "key1", 
    location : "noida",
    email : "amanhussain@google.com",
    isLogged: "false" ,
    lastLogged : ["mon" , "tue"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mySym]); //symbol in object syntax


jsuser.email = "aman031@gamil.com";
//Object.freeze(jsuser);// freez and stp updating of objects value 

jsuser.greeting = function(){
    console.log(`hello js user ${this.name}`);
    

}

console.log(jsuser.greeting);


