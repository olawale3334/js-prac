// find()method return value of first element that passes the test.
let ages =[12,45, 91, 90,56,89,99]

function checkAge(age){
    return  age > 90
}

let result = ages.find(checkAge);
console.log(result)

let names = ["ola","wale","dolapo"];

function checkName(name){
    if (name == "wale"){
        return true
    }
}

let nameData = ages.find (checkName);
console.log(nameData)

//slice

let fruits =["ornage","apple","banana","pinaplle"];
fruits.slice(1,2);
console.log(fruits)