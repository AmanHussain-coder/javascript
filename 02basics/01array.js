let myArr = [0,1,2,3,4,5];

myArr.unshift(9);

myArr.shift();  // remove element from starting

myArr.includes(9)

console.log(myArr.indexOf(19));

const newArr = myArr.join() // join make it in typeof string

// slice & splice

console.log("A " ,  myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B " , myArr);


const myn2 = myArr.splice(1,3);
console.log("C" , myArr); //splice change the original array



