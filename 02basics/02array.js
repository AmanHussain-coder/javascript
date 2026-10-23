const marvel = ["thor" , "ironman", "spiderman"]
const dchero = ["superman " , "flash" , "batman"]

marvel.push(dchero); //take cdhero as a one element in array
const allhero = marvel.concat(dchero); //now in concat they merge 

const allnewhero = [...marvel, ...dchero] // upgrade version spread instead of concat
console.log(allnewhero);

const anotherarry = [1,2,3 ,[4,5,6], 7 , [ 6,7,[4,5]]];

const realanotherarry = anotherarry.flat(Infinity); // spread all the elements of complex array

Array.isArray("Aman"); //false

Array.from("Aman"); // [ 'a' ,'m' ......] make a new arry
Array.from({name: "Aman"}); // []  





