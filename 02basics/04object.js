const tinderUser = new Object() // singleton object 
const tinderUser1 = {} // non singleton 

tinderUser1.id = "123abc";

console.log(tinderUser1);

const regular = {
    email : "a@gmail.com",
    fullname : {
        first : "aman",
        last : " hussain"
    }
}

const obj1 = {
    1:"a",
    2:"s"
}
const obj2 = {
    1:"a",
    2:"s"
}

const obj3 =Object.assign({}, obj1 , obj2); //{}=>assign which ever is first

const obj4 = {...obj1,...obj2};//spread method

const users = [ 
    {
        id: 1,
        email: "h@gmail.com"
    }
    {
        id :2 ,
        email: " a@gamil.com"
    }
]

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('logged'));


const course = {
    name : "js in hindi",
    price: "999",
    instructor : "hitesh"
}

// course.name
 
const {name: n} = course;

console.log(n);


