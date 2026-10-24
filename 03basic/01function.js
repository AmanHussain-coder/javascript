const user = {
    username : "aman",
    price : 199
}

function hbobj(anybody){
    console.log(`user is ${anybody.username} and price is ${price}`);
    
}

hbobj(user);

hbobj({
    username: "sam",
    price : 199
})

const mynewArray = [200,300,400] ;

function returnSecondVlaue(getArray){

    return getArray[1]
}

console.log(returnSecondVlaue(mynewArray));

console.log(returnSecondVlaue([10,4]));

